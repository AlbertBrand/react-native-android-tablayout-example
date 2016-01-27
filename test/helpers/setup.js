var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

wd.addPromiseChainMethod('elementByTextViewContents', function (selector) {
  return this.elementByXPath("//android.widget.TextView[@text='" + selector + "']");
});
