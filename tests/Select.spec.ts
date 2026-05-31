import {test } from "@playwright/test"
import {Select} from "../pages/Select"

test("testing for the test",async({page})=>{

    test.setTimeout(60000);
    const select= new Select(page);
    await select.Selectmethod();
    await page.waitForTimeout(30000);






})