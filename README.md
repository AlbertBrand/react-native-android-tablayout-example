# React Native Android TabLayout native component example

This is a functionality showcase of [the TabLayout component for React Native](https://github.com/AlbertBrand/react-native-android-tablayout).

![Animated example](https://i.imgur.com/nKFVnu4.gif)

## Run the example

Install NPM dependencies once:

```bash
npm i
```

Build and start the app on your emulator/device:

```bash
react-native run-android
```

## Usage

You can switch between different examples via the drawer menu:

* [SimpleTabLayout](app/SimpleTabLayout.js)
* [IconsOnTopTabLayout](app/IconsOnTopTabLayout.js)
* [StatefulTabLayout](app/StatefulTabLayout.js)
* [ViewPagerTabLayout](app/ViewPagerTabLayout.js)
* [ScrollableTabLayout](app/ScrollableTabLayout.js)
* [DynamicPropsTabLayout](app/DynamicPropsTabLayout.js)
* [CenteredTabLayout](app/CenteredTabLayout.js)
* [CustomViewTabLayout](app/CustomViewTabLayout.js)

## Integration test

Have a device connected with developer mode turned on or a running emulator ready.
Then run the integration test locally with:

```bash
npm run integration-test
```
