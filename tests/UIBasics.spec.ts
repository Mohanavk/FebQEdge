import {test,expect} from '@playwright/test';

test('fill the username',async({page})=>{ // test('fill the username',async function({page}){}

    //launch the browser
    //laucn the url
    //fill in the username and password
    //click on submit button
    //verify if login is successfull or not
    //page fixture will launch the browser

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('#username').fill("student");
    await expect (page.locator('#username')).toHaveValue("student");
    await page.locator('#password').fill("Password123");
    await expect(page.locator("#password")).toHaveValue("Password123");
    await page.getByRole('button',{name:'Submit'}).click(); // //await page.locator("#submit").click();
    await expect(page.getByRole('heading',{name:'Logged In Successfully'})).toBeVisible();
    //await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully");
    await expect(page.getByText("Log out",{exact:true})).toBeVisible();
   


})

test("Handling Radio Buttons and Checkboxes",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.getByLabel("Female").check();
    await expect(page.getByLabel("Female")).toBeChecked();

    await page.locator("#tuesday").check();
    await expect(page.locator("#tuesday")).toBeChecked();
    await page.locator("#tuesday").check(); // this will not perform any action if the checkboxis already selected
    await page.waitForTimeout(5000);
    await page.locator("#tuesday").uncheck(); //deselecting the selected checkbox
    await expect(page.locator("#tuesday")).not.toBeChecked();
    //await page.locator("#female").click();

})

test("Handling text value of an element",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
//textContent : to get text value of an element even if the element ois hidden on the page
//innerText(): to get text value of an element but will ignore the hidden text
const text=await page.locator(".post-title").innerText();
console.log(text);

//how to get the text value from multiple matching elements
//allTextContents() -
//allInnerTexts() to get text value from multiple matching elements but it will ignore the hidden text.

const allTexts =await page.locator("h2.title").allInnerTexts();
console.log(allTexts);
const count= await page.locator("h2.title").count();
console.log(count);


})