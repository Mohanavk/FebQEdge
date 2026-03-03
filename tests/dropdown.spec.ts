// Drop down - 2 types


//static drop down - values never chnage
//2-types - single select drop down and multi select drop down
//Dynamic drop down- values keep chaning like add of new items/delete of items 
//2-types - single select drop down and multi select drop down


//Dropdown develped using <select> tag
//1. Launch the url
//2. Locate thr drop down element by writing the locator
//3.Get the value form the drop dwon by using a method - selectOption("value" or  label,value,or index}
//4.

// DD using non select tag
//1. launch the url
//locate thr dropdown by using localStorage
///click on the dropdown
//identify and clcick on the element from dropdwon

import{test,expect} from'@playwright/test'

/* test("Handling dropdown",async({page})=>{
//single select dropdown option
await page.goto("https://practice.expandtesting.com/dropdown")
const countryDD=page.locator("#country");
await countryDD.selectOption("JO") //be default value attribute
await countryDD.selectOption({value:'AR'}) //value attribute as optional parameter
await countryDD.selectOption({label:"India"})
await countryDD.selectOption({index:2});//selectOption will check the options and choose them

//Multi select dropdown option
await page.goto("https://demoqa.com/select-menu")
await page.locator("#cars").selectOption(["volvo", "opel","audi"])
await page.waitForTimeout(3000)
//await page.locator('#cars').selectOption([{label:"Saab"},{index:3}])
//await page.waitForTimeout(3000) */

//Handling elemnts with non select tag

test("Handling non select tag dropdown element",async({page})=>{

await page.goto("https://demoqa.com/select-menu")
await page.locator("#selectOne").click()
await page.getByText("Mr.").click();
})

test("Multi select drop down",async({page})=>{

    await page.goto("https://demoqa.com/select-menu")
    await page.getByPlaceholder("Select...",{exact:true}).nth(1).click()
    await page.getByText("Green").click()
    await page.getByText("Blue").click()

})

//first()
//last()
//nth(index)

