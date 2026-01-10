import { test } from "@playwright/test";
import RegisterPageOld from "../Old Pages/RegisterPageOld";

test("Register test", async ({ page }) => {
  await page.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
  );
  let Register = new RegisterPageOld(page);
  await Register.Register();

  await page.waitForTimeout(2000);
});
