import { test } from "@playwright/test";
import {Canvas} from '../pages/Canvas'

test("Canvas",async ({page})=>{
      test.setTimeout(60000);
      const canvas=new Canvas(page);
      await canvas.visitcanvas();
      await canvas.gobackhomepage();
      await page.waitForTimeout(30000);
})