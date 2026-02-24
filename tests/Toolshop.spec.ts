import{test,expect} from '@playwright/test';
test("Login Functionality",async ({page})=>{

await page.goto("https://practicesoftwaretesting.com/");
await expect(page.getByTitle("Practice Software Testing - Toolshop")).toBeVisible();

await page.getByRole('link',{name:'sign in'}).click();
await expect(page.getByRole('heading',{name:'Login'})).toBeVisible();
await expect(page.getByRole('button',{name:'Sign in with Google'})).toBeVisible();
await page.getByPlaceholder("Your email").click();
await page.getByPlaceholder("Your email").fill("customer@practicesoftwaretesting.com");
await page.getByPlaceholder("Your password").click();
await page.getByPlaceholder("Your password").fill("welcome01");
await page.getByRole("button",{name:'Login'}).click();
await expect(page.getByRole('menuitem',{name:'Jane Doe'})).toBeVisible();
await page.locator("#menu").click();
await expect(page.getByRole("menuitem",{name:'My account'})).toBeVisible();
await expect(page.getByRole("menuitem",{name:'My favorites'})).toBeVisible();
await expect(page.getByRole("menuitem",{name:'My profile'})).toBeVisible();
await expect(page.getByRole("menuitem",{name:'My invoices'})).toBeVisible();
await expect(page.getByRole("menuitem",{name:'My messages'})).toBeVisible();
await expect(page.getByRole("menuitem",{name:'Sign out'})).toBeVisible();

await page.getByRole("menuitem",{name:'Sign out'}).click();






})