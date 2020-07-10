const puppeteer=require("puppeteer");



test("should open browser",async ()=>{
    let browser=await puppeteer.launch({
        headless:false
    })
    return expect(browser).toBeTruthy();
})
