import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.Submit();
  }
  async enterEmail(email: string) {
    await this.page.type("#input-email", email);
  }
  async enterPassword(password: string) {
    await this.page.type("#input-password", password);
  }
  async Submit() {
    await this.page.click("input[value='Login']");
  }
  async Load() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
  }
}
