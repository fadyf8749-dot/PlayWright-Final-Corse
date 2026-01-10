import { Page } from "@playwright/test";

export default class LoginPageOld {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private get emailindex() {
    return "#input-email";
  }
  private get Passwordindex() {
    return "#input-password";
  }
  private get submit() {
    return "input[value='Login']"
  }
  async Login() {
    await this.page.type(this.emailindex, "Fady@example.com")
    await this.page.type(this.Passwordindex, "Test1234")
    await this.page.click(this.submit)
  }
}
