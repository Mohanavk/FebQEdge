import{test,expect} from '@playwright/test';

test("Login Functionality",async({page})=>

{
  await page.goto("https://www.saucedemo.com/");
  await expect (page).toHaveTitle("Swag Labs");
  await page.getByRole("textbox", {name:'Username'}).fill('standard_user');
  await expect(page.getByRole("textbox",{name:'Username'})).toHaveValue("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await expect(page.locator("#password")).toHaveValue("secret_sauce");
  await page.getByRole("button",{name:"Login"}).click();
  await page.getByText("Products",{exact:true});
  await page.getByRole("button",{name:"Open Menu"}).click();
  await page.getByRole("link",{name:"Logout"}).click();


  


})