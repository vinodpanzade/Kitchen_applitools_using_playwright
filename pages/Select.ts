import {Page,Locator} from "@playwright/test"

export class Select{

    readonly page:Page;
    readonly Selecttext:Locator;
    readonly selectlable:Locator;


    constructor(page:Page){
        this.page=page;
        this.Selecttext= page.locator("h1").nth(0);
        this.selectlable=page.getByLabel("Single Select")
    }

    async Selectmethod(){
        await this.page.goto("https://kitchen.applitools.com/ingredients/select")
        const text= await this.Selecttext.textContent()
        console.log(text)


        // how many way suted to the selectOption

        await this.selectlable.selectOption({value:"chili-powder"})
       await this.selectlable.selectOption("Ginger");
       await this.selectlable.selectOption({index:1});
    //    await this.selectlable.selectOption(["Ginger","chilli powder"]) if its allow the multiple option
    
       
       // await this.selectlable.selectOption({label:"Ginger"}) if label is present 




    }




}