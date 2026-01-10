import { Page } from "@playwright/test";

export default class SpecialHotPage {
  constructor(public page: Page) {}

  async addFirstProductToTheCart() {
    await this.page.hover("//div[@class='image']/a", {
      strict: false,
    });
    await this.page.waitForLoadState("networkidle");

    await this.page.getByTitle("Add to Cart").first().click();
  }
  async isToastVisible() {
    let toast = this.page.locator("//a[.='View Cart ']");
    await toast.waitFor({ state: "visible" });
    return toast;
  }
  async checkit() {
    await this.page.click("//a[.='View Cart ']");
    let result = await this.page
      .locator("(//input[@class='form-control'])[1]")
      .inputValue();
    console.log(result);
    await this.page.waitForTimeout(1000);
    let price = await this.page
      .locator("(//td[@class='text-right']/following-sibling::td)[1]")
      .textContent();
    console.log(price);
  }
}
