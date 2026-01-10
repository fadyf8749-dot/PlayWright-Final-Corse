import { test, expect } from "@playwright/test";

test.describe("test All Alerts", () => {
  test("handling Alart", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
    );

    page.on("dialog", async (alert) => {
      let text = alert.message();
      console.log(text);
      await alert.accept();
    });

    // page.click("(//button[@type='button'])[1]")
    await page.locator("button:has-text('Click Me')").nth(0).click();
  });

  test("test the alart", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
    );
    page.on("dialog", async (alert) => {
      let text = alert.message();
      console.log(text);
      await alert.accept();
    });

    // page.click("(//button[@type='button'])[1]")
    await page.locator("button:has-text('Click Me')").nth(1).click();
    await expect(page.locator("id=confirm-demo")).toContainText(
      "You pressed OK!"
    );
  });
  test("test the last alart", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
    );
    page.on("dialog", async (alert) => {
      let text = alert.defaultValue();
      console.log(text);
      await alert.accept("Hiper");
    });

    // page.click("(//button[@type='button'])[1]")
    await page.locator("button:has-text('Click Me')").nth(2).click();
    await expect(page.locator("id=prompt-demo")).toContainText(
      "You have entered 'Hiper' !"
    );
  });
});
