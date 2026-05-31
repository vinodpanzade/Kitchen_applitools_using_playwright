import { Locator, Page, expect } from "@playwright/test";

export class Dragdrop {
  readonly page: Page;
  readonly dragele: Locator;
  readonly htmldragtext: Locator;
  readonly menutext: Locator;
  readonly menuitem: Locator;
  readonly menuitem1:Locator;
  readonly dropbucket:Locator;

  constructor(page: Page) {
    this.page = page;
    this.dragele = page.getByText("Drag & Drop");
    this.htmldragtext = page.getByText("HTML Drag & Drop API").nth(0);
    this.menutext = page.getByText("Menu").nth(0);
    this.menuitem = page.locator("#menu-items li");
    this.menuitem1=page.getByTestId("menu-fried-chicken");
    this.dropbucket=page.locator("#plate-items");

  }

  async dropvisibility() {

    await this.page.goto("https://kitchen.applitools.com/");
    await this.dragele.click();
    await expect(this.page).toHaveURL(
      "https://kitchen.applitools.com/ingredients/drag-and-drop",
    );
    const text = await this.htmldragtext.textContent();
    console.log(text);

    const menut = await this.menutext.textContent();
    console.log(menut);

  }

  async menuorder() {

    // iterating the menu
    const totalitem = await this.menuitem.count();
    for (let i: number = 0; i < totalitem; i++) {
      const items = await this.menuitem.nth(i).textContent();
      console.log(items);
    }
    //drag one element 
  // await this.menuitem1.dragTo(this.dropbucket);
 
    
  }
  

}
