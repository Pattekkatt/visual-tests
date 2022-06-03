import {test} from "../vrt-setup";

const {pages} = require("./../testData.js");
test.beforeAll(async ({vrt}) => {
    await vrt.start();
})
test.afterAll(async ({vrt}) => {
    await vrt.stop();
})

test.describe("Visual test", async () => {
    for (let i = 0; i <= pages.length - 1; i++) {
        test("Visual test for " + pages[i], async ({page, vrt}) => {
            await page.goto(pages[i]);

            //deleting zopim from page if present
            if (await page.evaluate(() => document.querySelectorAll('.zopim').length > 0)) {
                await page.evaluate(() => {
                    document.querySelector('.zopim').remove()
                })
            }

            //deleting reviews from page if present
            if (await page.evaluate(() => document.querySelectorAll('.horiz-reviews').length > 0)) {
                await page.evaluate(() => {
                    document.querySelector('.horiz-reviews').remove()
                })
            }
            await page.waitForLoadState('networkidle');
            await vrt.trackPage(page, pages[i], {screenshotOptions: {fullPage: true}});
        })
    }
});
