import { Page } from "@playwright/test";

export default class RegisterPage {
  constructor(public page: Page) {}

  async enterFirstName(firstname: string) {
    await this.page.type("#input-firstname", firstname);
  }
  async enterLastName(lastname: string) {
    await this.page.type("#input-lastname", lastname);
  }
  async enterEmail(Email: string) {
    await this.page.type("#input-email", Email);
  }
  async enterTelephone(telephone: string) {
    await this.page.type("#input-telephone", telephone);
  }
  async enterPassword(password: string) {
    await this.page.type("#input-password", password);
  }
  async enterPasswordConfirm(passwordconfirm: string) {
    await this.page.type("#input-confirm", passwordconfirm);
  }
  async Check() {
    await this.page.click("label[for='input-agree']");
  }
  async Submit() {
    await this.page.click("input[type='submit']");
  }
  async Load() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
    );
  }
}
