import { test as baseTest, chromium } from "@playwright/test";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import SpecialHotPage from "../pages/SpecialHotPage";
import path from "path";

type pages = {
  registerpage: RegisterPage;
  loginPage: LoginPage;
  homePage: HomePage;
  SpecialHotPage: SpecialHotPage;
};

const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright Test Build",
    name: "Playwright Test",
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
    tunnel: false, // Add tunnel configuration if testing locally hosted webpage
    tunnelName: "", // Optional
    geoLocation: "", // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
  },
};
const modifyCapabilities = (configName, testName) => {
  let config = configName.split("@lambdatest")[0];
  let [browserName, browserVersion, platform] = config.split(":");
  capabilities.browserName = browserName
    ? browserName
    : capabilities.browserName;
  capabilities.browserVersion = browserVersion
    ? browserVersion
    : capabilities.browserVersion;
  capabilities["LT:Options"]["platform"] = platform
    ? platform
    : capabilities["LT:Options"]["platform"];
  capabilities["LT:Options"]["name"] = testName;
};

let testPages = baseTest.extend<pages>({
  page: async ({}, use, testInfo) => {
    let fileName = testInfo.file.split(path.sep).pop();
    if (testInfo.project.name.match(/lambdatest/)) {
      modifyCapabilities(
        testInfo.project.name,
        `${testInfo.title} - ${fileName}`
      );
    }

    let browser = await chromium.connect(
      `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify(capabilities)
      )}`
    );
    let context = await browser.newContext(testInfo.project.use);
    let itPage = await context.newPage();
    await use(itPage);
    //
    // const testStatus = {
    //   action: "setTestStatus",
    //   arguments: {
    //     status: testInfo.status,
    //     remark: testInfo.error?.stack || testInfo.error?.message,
    //   },
    // };
    // await itPage.evaluate(() => {},
    // `lambdatest_action: ${JSON.stringify(testStatus)}`);
    //
    await itPage.close();
    await context.close();
    await browser.close();
  },

  registerpage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  SpecialHotPage: async ({ page }, use) => {
    await use(new SpecialHotPage(page));
  },
});

export let test = testPages;
export let expect = testPages.expect;
