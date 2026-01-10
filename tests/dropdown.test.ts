import { expect, test } from "@playwright/test";

test("test DropDown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.selectOption("#select-demo", {
    label: "Saturday",
  });
  //   await page.click('option[value="Saturday"]');
  let massege = page.locator("p.selected-value.text-size-14");
  await expect(massege).toHaveText("Day selected :- Saturday");
});

test("test DropDown select", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.selectOption("#multi-select", {
    label: "Ohio",
  });
  await page.keyboard.down("Control");

  await page.locator('#multi-select option[value="Ohio"]').click();

  await page.keyboard.up("Control");

  await page.click("#printMe");

  // await expect(page.locator(".genderbutton")).toContainText("Ohio");

  // await page.selectOption("#multi-select", {
  //   label: "New Jersey",
  // });
  // await page.click("#printAll");
  // let secoendOne = page.locator("span.groupradiobutton.block");
  // expect(secoendOne).toHaveText("New Jersey");
});

test("test DropDown select Number 2", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  await selectcountry("Australia");
  await selectcountry("Denmark");
  await selectcountry("Netherlands");

  async function selectcountry(countryname:string) {
  await page.click("#country+span");
  await page.locator("ul#select2-country-results").locator("li", {
    hasText: countryname,
  }).click();
}
})



// test('test', async ({ page }) => {
//   await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
//   await page.getByLabel('', { exact: true }).click();
//   await page.getByRole('treeitem', { name: 'Australia' }).click();
// });
