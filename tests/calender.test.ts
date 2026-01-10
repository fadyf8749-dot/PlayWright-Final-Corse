import { test } from "@playwright/test";
import moment from "moment";

test("Calender demo using fill function", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  let data = "2003-07-15";
  await page.fill("[id=birthday]", data);
  await page.waitForTimeout(2000);
});

test("Calender demo using moment", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  await selectDate(15, "July 2003");
  await page.reload();
  await selectDate(15, "July 2026");
  await page.reload();
  await selectDate(15, "July 2028");

  await page.waitForTimeout(2000);

  async function selectDate(data: number, dataSelect: string) {
    await page.click("input[placeholder='Start date']");
    let mmYY = page.locator("(//th[@class='datepicker-switch'])[1]");
    let prev = page.locator("(//th[@class='prev'])[1]");
    let next = page.locator("(//th[@class='next'])[1]");

    // let dataSelect: string = "July 2003";

    let thisMonth = moment(dataSelect, "MMMM YYYY").isBefore();
    console.log("this Month?", thisMonth);

    while ((await mmYY.textContent()) != dataSelect) {
      if (thisMonth) {
        await prev.click();
      } else {
        await next.click();
      }
    }
    await page.click(`(//td[@class='day'][text()=${data}])`);
  }
});
