import { test } from "@playwright/test";

test("Download files", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo",
  );
  await page.waitForTimeout(3000);

  await page.type("#textbox", "Hiper Is Here");
  await page.click("#create");

  let [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("#link-to-download"),
  ]);
  let FileName = download.suggestedFilename();
  await download.saveAs(FileName);
  //   let path = await download.path();
  //   console.log(path);
});

test("Upload files", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  //   await page.setInputFiles("input[type='file']", [
  //     "C:/Users/Fady Magdy/Downloads/Upload Photos/God of War Ragnarok.png",
  //     "C:/Users/Fady Magdy/Downloads/Upload Photos/God of War Ragnarok.png",
  //   ]);

  let [uploadFiles] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click("input[type='file']"),
  ]);
  //   let isMultiple = uploadFiles.isMultiple();
  //   console.log(isMultiple);
  uploadFiles.setFiles([
    "Upload Photos/God of War Ragnarok.png",
    "Upload Photos/God of War Ragnarok.png",
  ]);

  await page.waitForTimeout(2000);
});
