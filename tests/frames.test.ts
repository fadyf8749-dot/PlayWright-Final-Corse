import { expect, test } from "@playwright/test";

test("Interact with frames", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  let allframes = page.frames();
  console.log("No.of frames " + allframes.length);

  let myFrame = page.frame("firstFr");
  await myFrame?.type("input[name='fname']", "FADY");
  await myFrame?.type("input[name='lname']", "HIPER");

  expect(
    await myFrame?.locator("p.title.has-text-info").textContent()
  ).toContain("You have entered FADY HIPER");
  //   let massege = myFrame.locator("p.title.has-text-info");
  //   await expect(massege).toHaveText("You have entered FADY HIPER");
});

test("Interact with frame", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  let frame = page.frameLocator("#firstFr");
  await frame.locator("input[name='fname']").fill("FADY");
  await frame.locator("input[name='lname']").fill("HIPER");

  let frameEmail = frame.frameLocator('iframe[src="innerframe"]');
  await frameEmail.locator("input[name='email']").fill("hiper@example.com");
});
