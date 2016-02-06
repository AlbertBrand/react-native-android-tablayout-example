#!/usr/bin/env bash -e

APPIUM_PORT=4800

function wait_seconds_for_port() {
  local T=$1; while [ $T -gt 0 ]; do
    6<>/dev/tcp/127.0.0.1/$2 >/dev/null && return 0
    echo -e $3 "timeout in: " $((T--)); sleep 1;
  done 2> /dev/null; return 1
}

function kill_port_process() {
  echo Killing process on port $1
  process=$(lsof -i :$1 | tail -1 | awk '{print $2}')
  if [ ! -z "$process" ]; then
    kill -9 $process
  fi
}

function start_appium() {
  node ./node_modules/.bin/appium --address 127.0.0.1 --port ${APPIUM_PORT} --log-level warn &
}

function assemble_release_apk() {
  (cd android && ./gradlew assembleRelease)
}

function wait_for_appium() {
  wait_seconds_for_port 30 ${APPIUM_PORT} "Waiting for Appium server"
}

function run_integration_test() {
  node ./node_modules/.bin/mocha test/appClickScenario.js
}

function kill_appium() {
  kill_port_process ${APPIUM_PORT}
}

trap kill_appium EXIT SIGINT

start_appium
assemble_release_apk
wait_for_appium
run_integration_test
