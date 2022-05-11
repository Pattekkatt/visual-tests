import {test as base} from "@playwright/test";
import {PlaywrightVisualRegressionTracker} from "@visual-regression-tracker/agent-playwright";

const {baseUrl, pages, screenWidth, screenHeight} = require("./../testData.js");

type TestFixtures = {
    vrt: PlaywrightVisualRegressionTracker;
};
const test = base.extend<{}, TestFixtures>({
    vrt: [
        async ({browserName}, use) => {
            await use(new PlaywrightVisualRegressionTracker(browserName));
        },
        {scope: "worker"},
    ],
});
test.use({viewport: {width: screenWidth, height: screenHeight}});
test.beforeAll(async ({vrt}) => {
    await vrt.start();
});
test.afterAll(async ({vrt}) => {
    await vrt.stop();
});

test.describe("Visual test", () => {
    for (let i = 0; i <= pages.length - 1; i++) {
        test("Visual test for " + pages[i], async ({page, vrt}) => {

            await page.goto(baseUrl + pages[i]);
            await page.evaluate(() => document.querySelector('.horiz-reviews').remove());
            for (let i = 0; i < page.evaluate(() => document.body.scrollHeight); i += 100) {
                await page.mouse.wheel(0, i);
            }
            await page.waitForLoadState('networkidle');
            await vrt.trackPage(page, pages[i], {screenshotOptions: {fullPage: true},});
        });
    }
});
