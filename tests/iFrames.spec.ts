import {test} from "@playwright/test"
import {iFrames} from "../pages/iFrames"

test("Tesing of iframe",async({page})=>{
     
       test.setTimeout(60000);
    const iframe= new iFrames(page);

    await iframe.printtable();
await page.waitForTimeout(30000);
    

})