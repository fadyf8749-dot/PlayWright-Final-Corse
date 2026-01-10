import { Page } from "@playwright/test";

export default class HomePage {
  constructor(public page: Page) {}

  async clickonspecialhotmenu() {
    await this.page.click("span.badge.mx-1.mz-menu-label-27");
    await this.page.click("(//a[@class='nav-link'])[1]");
  }
}
