import { test } from "@playwright/test";
import LoginPageOld from "../Old Pages/LoginPageOld";

test("Register test", async ({ page }) => {
  await page.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );
  let Login = new LoginPageOld(page);
  await Login.Login();

  await page.waitForTimeout(2000);
  
});
