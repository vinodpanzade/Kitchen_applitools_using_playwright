import {test} from '@playwright/test'
import {Tables_page} from '../pages/Tables_page'

test("Tables testing ",async ({page})=>{
     test.setTimeout(60000);
    const Table= new Tables_page(page);
    await Table.tablecheck();
    await page.waitForTimeout(30000);
    

})