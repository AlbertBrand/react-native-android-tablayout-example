"use strict";

require("./helpers/setup");

var wd = require("wd");
var serverConfig = require('./helpers/serverConfig');
var driverConfig = require('./helpers/driverConfig');
var Labels = require('../app/Labels');
var driver;

wd.addPromiseChainMethod('goToRoute', function (selector) {
  return driver
    .elementByXPath("//android.widget.ImageButton")
    .click()
    .elementByAccessibilityId(Labels.Drawer.itemPrefix + selector)
    .click()
});

describe("appClickScenario", function () {
  this.timeout(300000);

  before(function () {
    driver = wd.promiseChainRemote(process.env.SAUCE ? serverConfig.sauce : serverConfig.local);
    return driver
      .init(driverConfig.android22)
      .setImplicitWaitTimeout(3000);
  });

  it('should click through the SimpleTabLayout tabs', function () {
    return driver
      .elementByAccessibilityId(Labels.Simple.tab2)
      .click()
      .elementByXPath("//*[@content-desc='" + Labels.Simple.tab2 + "'][@selected='true']")
      .should.eventually.exist
      .elementByTextViewContents("Tab 2 selected")
      .should.eventually.exist

      .elementByAccessibilityId(Labels.Simple.tab3)
      .click()
      .elementByXPath("//*[@content-desc='" + Labels.Simple.tab3 + "'][@selected='true']")
      .should.eventually.exist
      .elementByTextViewContents("Tab 3 selected")
      .should.eventually.exist

      .elementByAccessibilityId(Labels.Simple.tab1)
      .click()
      .elementByXPath("//*[@content-desc='" + Labels.Simple.tab1 + "'][@selected='true']")
      .should.eventually.exist
      .elementByTextViewContents("Tab 1 selected")
      .should.eventually.exist;
  });

  it('should switch to the IconsOnTopTabLayout', function () {
    return driver.goToRoute("IconsOnTopTabLayout");
  });

  it('should click through the IconsOnTopTabLayout tabs', function () {
    return driver
      .elementByAccessibilityId(Labels.IconsOnTop.tab2)
      .click()
      .elementByAccessibilityId(Labels.IconsOnTop.tab3)
      .click()
      .elementByAccessibilityId(Labels.IconsOnTop.tab1)
      .click()
  });

  it('should switch to the StatefulTabLayout', function () {
    return driver.goToRoute("StatefulTabLayout");
  });

  it('should click through the StatefulTabLayout tabs', function () {
    return driver
      .elementByAccessibilityId(Labels.Stateful.tab2)
      .click()
      .elementByAccessibilityId(Labels.Stateful.tab1)
      .click()
      .elementByAccessibilityId(Labels.Stateful.button)
      .click()
  });

  it('should switch to the ViewPagerTabLayout', function () {
    return driver.goToRoute("ViewPagerTabLayout");
  });

  it('should click through the ViewPagerTabLayout tabs', function () {
    return driver
      .elementByAccessibilityId(Labels.ViewPager.tab2)
      .click()
      .elementByTextViewContents("Tab 2 content")
      .should.eventually.exist

      .elementByAccessibilityId(Labels.ViewPager.tab3)
      .click()
      .elementByTextViewContents("Tab 3 content")
      .should.eventually.exist

      .elementByAccessibilityId(Labels.ViewPager.tab1)
      .click()
      .elementByTextViewContents("Tab 1 content")
      .should.eventually.exist
  });

  it('should switch to the ScrollableTabLayout', function () {
    return driver.goToRoute("ScrollableTabLayout");
  });

  it('should click through the ScrollableTabLayout tabs', function () {
    return driver
      .elementByAccessibilityId(Labels.Scrollable.tab2)
      .click()
      .elementByAccessibilityId(Labels.Scrollable.tab5)
      .click()
      .elementByAccessibilityId(Labels.Scrollable.tab7)
      .click()
      .elementByAccessibilityId(Labels.Scrollable.tab9)
      .click()
  });

  it('should switch to the DynamicPropsTabLayout', function () {
    return driver.goToRoute("DynamicPropsTabLayout");
  });

  it('should click through the DynamicPropsTabLayout tabs', function () {
    return driver
      .elementByAccessibilityId(Labels.DynamicProps.tab2)
      .click()
      .elementByAccessibilityId(Labels.DynamicProps.tab3)
      .click()
      .elementByAccessibilityId(Labels.DynamicProps.tab1)
      .click()
  });

  after(function () {
    return driver.quit();
  });
});
