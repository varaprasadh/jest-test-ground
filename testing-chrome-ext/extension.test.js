const puppeteer = require('puppeteer');
const path = "unnamed-awesome-extension/chrome/addon/"


describe("testing extension functionality", () => {
    let browser = null;
    beforeAll(async () => {
        const pathToExtension = require('path').join(__dirname, path);
        browser = await puppeteer.launch({
            headless: false,
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`
            ]
        });
    });
    afterAll(() => {
        if (browser) browser.close();
    })

    test("should open new tab page", async () => {
        const newpage = await browser.newPage();
        await newpage.goto("about:newtab");
        const title = await newpage.$eval(".brand-title", el => el.innerText);
        expect(title).toMatch("#WCS");
        await newpage.close();
    })
    test("should query the input provided to searchbar", async () => {
        const newpage = await browser.newPage();
        await newpage.goto("about:newtab");
        const title = await newpage.$eval(".search-bar", el => el.value = "google");
        // expect(title).toMatch("#WCS");
        await newpage.click(".search-icon");
        await newpage.waitForNavigation({
            waitUntil: 'networkidle0'
        })
        const url = await newpage.url()
        expect(url).toMatch("https://www.google.com/search?q=google");
    }, 10000)

})
