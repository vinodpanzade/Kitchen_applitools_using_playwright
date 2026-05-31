import { expect, Locator, Page } from "@playwright/test";

export class Alert {
  readonly page: Page;
  readonly alert: Locator;
  readonly Canvas: Locator;
  readonly Thekitchen: Locator;
  readonly Alerttext: Locator;
  readonly trigeralert: Locator;
  readonly trigerconfirm: Locator;
  readonly trigerprompt: Locator;
  readonly anchrokitchen: Locator;

  constructor(page: Page) {
    this.page = page;
    this.alert = page.getByText("Alert");
    this.Thekitchen = page.locator("h1");
    this.Canvas = page.getByText("Canvas");
    this.Alerttext = page.locator("h1");
    this.trigeralert = page.locator("#alert-button");
    this.trigerconfirm = page.locator("#confirm-button");
    this.trigerprompt = page.locator("#prompt-button");
    // this is how we can get the same name of anchor tag with mention child of the anchor
    this.anchrokitchen = page.getByRole("link", { name: "The Kitchen" }).nth(0);
  }

  async visitAlert() {
    await this.page.goto("https://kitchen.applitools.com/");
    await this.Thekitchen.isVisible();
    const kitchentext = await this.Thekitchen.textContent();
    console.log(kitchentext);
    await this.alert.click();
    console.log("visiting alert page");
  }

  async Alerttesting() {
    await expect(this.page).toHaveURL(
      "https://kitchen.applitools.com/ingredients/alert",
    );
    console.log("alert page checking");
    //await this.Alerttext.isVisible();
  }
  async Alertpage() {
    await this.Alerttext.isVisible();
    const mess = await this.trigeralert.textContent();
    console.log(mess);
    // this is how we handle the pop messaage
    this.page.once("dialog", async (dialog) => {
      console.log(dialog.message());

      await dialog.accept();
    });

    await this.trigeralert.click();

    // confirm the alert
    await this.trigerconfirm.isVisible();
    const trigerconf = this.trigerconfirm;
    const trigercontext = await trigerconf.textContent();

    console.log(trigercontext);

    this.page.once("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.accept();
    });
    await trigerconf.click();

    // prompt triger
    const alertprmp = this.trigerprompt;
    const textprom = await alertprmp.textContent();
    console.log(textprom);

    this.page.once("dialog", async (dialog) => {
      //console.log(dialog.message());
      await dialog.accept("Vinod");
    });
  }

  async gobackhomepage() {
    await this.anchrokitchen.click();
    console.log("back on home page");
  }
}
