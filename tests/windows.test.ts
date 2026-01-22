import { Page, test } from "@playwright/test";

test("Intract With Multiple Tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo",
  );
  console.log(page.url());
  await page.waitForTimeout(2000);

  let [NewWindows] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("'Follow On Twitter'"),
  ]);
  console.log(NewWindows.url());
});

test("Intract With Multiples Tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo",
  );
  await page.waitForTimeout(2000);

  let [MultiPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#followboth"),
  ]);
  await MultiPage.waitForLoadState();

  let pages = MultiPage.context().pages();
  console.log("Numbers of Tabs" + pages.length);

  pages.forEach((tap) => {
    console.log(tap.url());
  });

  let facebookPages: Page;
  for (let index = 0; index < pages.length; index++) {
    let url = pages[index].url();
    if (url == "https://www.facebook.com/lambdatest/") {
      facebookPages = pages[index];
    }
  }
  // let text = await facebookPages.textContent("//h1");
  // console.log(text);
});
