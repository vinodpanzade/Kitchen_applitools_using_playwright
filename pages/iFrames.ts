import {Page, Locator,FrameLocator} from '@playwright/test'

export class iFrames{

    readonly iframeheading:Locator;
    readonly page:Page;
    // readonly frame:FrameLocator;


    constructor (page:Page){
        
        this.page=page
        this.iframeheading= page.getByText("iFrame").nth(0)
        // this.frame= page.frameLocator("#the-kitchen-table")
       
    }

    async printtable(){
        await this.page.goto("https://kitchen.applitools.com/ingredients/iframe");
        // const thead= this.frame.locator("h1").nth(0)
        // const text = await thead.textContent();
        // console.log(text)

        // using the contentFrame()
       
        // const frame= await this.page.locator("#the-kitchen-table").contentFrame();

        // const thead= frame.locator("h1").nth(0);
        // const text= await thead.textContent();
        // console.log(text)


        // using the page.frame()
        // when we are using the page.frame() then we cant use the id with this have to use the link


        // const frame= this.page.frame({url: "https://kitchen.applitools.com/ingredients/table"})
        // const text = await frame?.locator("h1").textContent();
        // console.log(text);

      
        // now page.frames()  Gets all frames on the page.   

        // print the all frame present on page 

        const frames = this.page.frames();
        for(const frame of frames){
            console.log(frame.url());
        }

        // pick one frame from the page 

        const frame= this.page.frames()[1];
        const text= await frame.locator("h1").textContent();
        console.log(text)
 



    }








}