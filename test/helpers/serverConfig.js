exports.local = {
  host: '127.0.0.1',
  port: 4800
};

exports.sauce = {
  host: 'ondemand.saucelabs.com',
  port: 80,
  username: process.env.SAUCE_USERNAME,
  password: process.env.SAUCE_ACCESS_KEY
};
