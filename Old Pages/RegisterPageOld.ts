import { Page } from "@playwright/test";

export default class RegisterPageOld {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private get firstnameindex() {
    return "#input-firstname";
  }
  private get Lastnameindex() {
    return "#input-lastname";
  }
  private get emailindex() {
    return "#input-email";
  }
  private get telephoneindex() {
    return "#input-telephone";
  }
  private get passwordindex() {
    return "#input-password";
  }
  private get passwordconfirmindex() {
    return "#input-confirm";
  }
  private get check() {
    return "label[for='input-agree']";
  }
  private get submit() {
    return "input[type='submit']";
  }

  async Register() {
    await this.page.type(this.firstnameindex, "Fady");
    await this.page.type(this.Lastnameindex, "Hiper");
    await this.page.type(this.emailindex, "Fady@example.com");
    await this.page.type(this.telephoneindex, "01270947666");
    await this.page.type(this.passwordindex, "Test1234");
    await this.page.type(this.passwordconfirmindex, "Test1234");
    await this.page.click(this.check);
    await this.page.click(this.submit);
  }
}
