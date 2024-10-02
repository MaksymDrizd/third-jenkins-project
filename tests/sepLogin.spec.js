import { expect, test } from '@playwright/test';

test('SEP login with env variables', async ({ page }) => { 

    //https://qa.sep.tdtm.cydeo.com/taws
    let username = "automation-user";
    let password =  "123abc";

    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

    // set up the authentication header
    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${code}`
    });

    await page.goto(`${process.env.SEP_URL}`);

    expect(await page.title()).toContain("Checkout");

    console.log(`${process.env.SEP_USERNAME}`);
    console.log(`${process.env.SEP_PASSWORD}`);
    console.log(`${process.env.SEP_URL}`);

 });