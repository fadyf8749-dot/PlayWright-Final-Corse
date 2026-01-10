import { test, expect } from "@playwright/test";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import SpecialHotPage from "../pages/SpecialHotPage";

let email = "Fady3@example.com";
let password = "Test1234";

test.describe("test Register, Login & Add To Cart", () => {
  test("Register test-01", async ({ page }) => {
    let register = new RegisterPage(page);
    await register.Load();
    await register.enterFirstName("Fady");
    await register.enterLastName("Hiper");
    await register.enterEmail(email);
    await register.enterTelephone("01270947777");
    await register.enterPassword(password);
    await register.enterPasswordConfirm(password);
    await register.Check();
    await register.Submit();
    await page.waitForTimeout(2000);
  });

  test("Login test-02", async ({ page }) => {
    let login = new LoginPage(page);
    await login.Load();
    await login.enterEmail(email);
    await login.enterPassword(password);
    await login.Submit();
    expect(await page.title()).toBe("My Account");
  });

  test("Add To Cart test-03", async ({ page }) => {
    let login = new LoginPage(page);
    await login.Load();
    await login.login(email, password);
    let homepage = new HomePage(page);
    await homepage.clickonspecialhotmenu();
    let special = new SpecialHotPage(page);
    await special.addFirstProductToTheCart();
    let isCartVisible = await special.isToastVisible();
    expect(isCartVisible).toBeVisible();
    await special.checkit();
  });
});
