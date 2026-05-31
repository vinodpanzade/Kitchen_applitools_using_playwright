import {test} from '@playwright/test'
 import {Dragdrop} from '../pages/Dragdrop'
test("Drag and drop",async({page})=>{

 test.setTimeout(60000);
    const dragdrop= new  Dragdrop(page);
    await dragdrop.dropvisibility();
    await dragdrop.menuorder();
    await page.waitForTimeout(30000);

})