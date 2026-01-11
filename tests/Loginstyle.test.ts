import { chromium, expect, test } from "@playwright/test";

// const capabilities = {
//   browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//   browserVersion: "latest",
//   "LT:Options": {
//     platform: "Windows 10",
//     build: "Playwright Test Build",
//     name: "Playwright Test",
//     user: process.env.LT_USERNAME,
//     accessKey: process.env.LT_ACCESS_KEY,
//     network: true,
//     video: true,
//     console: true,
//     tunnel: false, // Add tunnel configuration if testing locally hosted webpage
//     tunnelName: "", // Optional
//     geoLocation: "", // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
//   },
// };
test("Login test demo", async () => {
  let browser = await chromium.launch();
  // connect(
  //   `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
  //     JSON.stringify(capabilities)
  //   )}`
  // );

  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(
    '//a[@data-toggle="dropdown"]//span[contains(., "My account")]'
  );
  await page.click("text=Login");
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );

  await page.type('[id="input-email"]', "Fady3@example.com");
  await page.type('[id="input-password"]', "Test1234");
  await page.click('input[value="Login"]');

  // let newContext = await browser.newContext();
  // let newPage = await newContext.newPage();
  // await newPage.goto("");
});
