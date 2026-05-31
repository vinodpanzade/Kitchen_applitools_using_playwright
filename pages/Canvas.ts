import {Page, Locator} from '@playwright/test'

export class Canvas{
     readonly page:Page;
     readonly canvas:Locator;
     readonly burgerelem:Locator;
     readonly anchrokitchen:Locator;

     constructor (page:Page){
      this.page= page;
      this.canvas=page.getByText("Canvas");
      this.burgerelem=page.locator("#burger_canvas");
       this.anchrokitchen = page.getByRole("link", { name: "The Kitchen" }).nth(0);
     }

     async visitcanvas(){
        await this.page.goto("https://kitchen.applitools.com/");
        await this.canvas.click();
        const isvisible=await this.burgerelem.isVisible();
        console.log(isvisible)

     }

      async gobackhomepage() {
    await this.anchrokitchen.click();
    console.log("back on home page");
  }


}