import { test, expect } from "../base/pomFixture";
import * as data from "../test-data/addToCart.test-data.json";

let email = "Fady3@example.com";
let password = "Test1234";

test.describe("test Register, Login & Add To Cart", () => {
  test("Register test-01", async ({ page, registerpage }) => {
    await registerpage.Load();
    await registerpage.enterFirstName(data.firstname);
    await registerpage.enterLastName(data.lastname);
    await registerpage.enterEmail(data.email);
    await registerpage.enterTelephone(data.phone_number);
    await registerpage.enterPassword(data.password);
    await registerpage.enterPasswordConfirm(data.password);
    await registerpage.Check();
    await registerpage.Submit();
    await page.waitForTimeout(2000);
  });

  test("Login test-02", async ({ page, loginPage }) => {
    await loginPage.Load();
    await loginPage.enterEmail(data.email);
    await loginPage.enterPassword(data.password);
    await loginPage.Submit();
    expect(await page.title()).toBe("My Account");
  });

  test("Add To Cart test-03", async ({
    page,
    loginPage,
    homePage,
    SpecialHotPage,
  }) => {
    await loginPage.Load();
    await loginPage.login(email, password);
    await homePage.clickonspecialhotmenu();
    await SpecialHotPage.addFirstProductToTheCart();
    let isCartVisible = await SpecialHotPage.isToastVisible();
    expect(isCartVisible).toBeVisible();
    await SpecialHotPage.checkit();
  });
});
