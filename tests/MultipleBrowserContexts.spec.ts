//how to handle multiple browser contexts in playwright to test multi user scenarios,
//  parellel test execution,isolating test data,testing with different states

const {chromium}= require('playwright');

//launch browser

const browser =await chromium.launch();

//create multiple isolated contexts
const context1=await browser.newContext();
const context2= await browser.newContext();

//each context has its own pages

const page1=await context1.newPage();
const page2=await context2.newPage();

//different sessions -no data sharing

await page1.goto("https://example.com");
await page2.goto("https://example.com");

//cleanup:

await context1.close();
await context2.close();
await browser.close();

export {};
