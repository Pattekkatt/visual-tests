import {PlaywrightVisualRegressionTracker} from "@visual-regression-tracker/agent-playwright";
import {test as base} from "@playwright/test";

type TestFixtures = {
    vrt: PlaywrightVisualRegressionTracker;
};
export const test = base.extend<{}, TestFixtures>({
    vrt: [
        async ({browserName}, use) => {
            await use(new PlaywrightVisualRegressionTracker(browserName));
        },
        {scope: "worker"},
    ],
});