import { Page, Locator, expect } from "@playwright/test";

export class Links {
  readonly linktext: Locator;
  readonly page: Page;
  readonly tablelink: Locator;
  readonly eater: Locator;

  constructor(page: Page) {
    this.page = page;
    this.linktext = page.locator("h1").nth(0);
    this.tablelink = page.locator("#button-the-kitchen-table");
    this.eater = page.locator("#button-applitools");
  }

  async Linkmethod() {
    await this.page.goto("https://kitchen.applitools.com/ingredients/links");
    const textcheck = await this.linktext.textContent();
    console.log(textcheck);

    // // for the table link
    // const [newPage] = await Promise.all([
    //   this.page.waitForEvent("popup"),
    //   this.tablelink.click(),
    // ]);

    // await newPage.waitForLoadState();

    // console.log(newPage.url());
    // //const url= await newPage.url();

    // await expect(newPage).toHaveURL(
    //   "https://kitchen.applitools.com/ingredients/table",
    // );
    //  await newPage.close();

    // // for the eater
    // const [newPage2] = await Promise.all([
    //   this.page.waitForEvent("popup"),
    //   this.eater.click(),
    // ]);
    // await newPage2.waitForLoadState();

    // console.log(newPage2.url());

    // await expect(newPage2).toHaveURL("https://www.eater.com/");


    await this.verifyLink(
      this.tablelink,
      "https://kitchen.applitools.com/ingredients/table",
    );

    await this.verifyLink(this.eater, "https://www.eater.com/");


  }

  async verifyLink(link: Locator, expectedUrl: string) {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
          
      link.click()
    ]);

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(expectedUrl);
    console.log(expectedUrl)

    await newPage.close();
  }





}
