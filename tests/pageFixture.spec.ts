import{test,expect} from '@playwright/test';

test ("page fixture",async({page})=>{

await page.goto("https://practicetestautomation.com/practice-test-login/")
await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/");
await page.locator("#username").fill("student");
await page.locator("#password").fill("Password123");
await page.locator("#submit").click();
await expect(page.locator(".post-title")).toContainText("Logged In Successfully")
await page.waitForTimeout(3000);
//await page.getByRole("link",{name:"Log out"}).click();



//await page.waitForTimeout(3000)


});


/*test("Browser fixture",async({browser})=>{

    const context =await browser.newContext() // create a new browser context
    const page = await context.newPage() // create a new page in the context
    //await page.goto("https://practicetestautomation.com/practice-test-login/")

await page.waitForTimeout(3000)


});*/