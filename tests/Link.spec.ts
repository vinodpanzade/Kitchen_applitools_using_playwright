import {test} from "@playwright/test"

import {Links} from "../pages/Link"

test("link testing ",async({page})=>{


    const link= new Links(page);
    await link.Linkmethod();
})

