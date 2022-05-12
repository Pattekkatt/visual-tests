// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    testDir: './tests/',
    testMatch: '*tests.ts',
    use: {
        baseURL: 'https://hostiq.ua',
        browserName: 'chromium',
        headless: true,
        viewport: {width: 1600, height: 720}
    },

};

module.exports = config;
