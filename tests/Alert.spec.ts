import { test } from "@playwright/test";

import { Alert } from "../pages/Alert";

test("Pom testing ", async ({ page }) => {
  test.setTimeout(60000);
  const alert = new Alert(page);

  await alert.visitAlert();

  await alert.Alerttesting();
  await alert.Alertpage();
  await alert.gobackhomepage();



  await page.waitForTimeout(30000);

});
