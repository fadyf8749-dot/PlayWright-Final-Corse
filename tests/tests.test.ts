import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  let massgeInput = page.locator("input#user-message");
  console.log(await massgeInput.getAttribute("placeholder"));
  expect(massgeInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message"
  );
  console.log("Before entering data: " + (await massgeInput.inputValue()));
  await massgeInput.type("Hi Hiper");
  console.log("After entering data: " + (await massgeInput.inputValue()));
});

test("test the max", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  let num1 = 100;
  let num2 = 50;
  await page.locator("#sum1").type("" + num1);
  await page.locator("#sum2").type("" + num2);
  await page.click("form#gettotal>button");
  let resulte = page.locator("#addmessage");
  console.log(await resulte.textContent());
  let expectresulte = num1 + num2;
  await expect(resulte).toHaveText("" + expectresulte);
});

test("check it ,and make sure its checked", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  await page.check('(//input[@type="checkbox"])[1]');
  let checkMassege = page.locator('//p[normalize-space(text())="Checked!"]');
  await expect(checkMassege).toBeVisible();
});

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
