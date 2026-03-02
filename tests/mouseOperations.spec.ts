//Various Mouse Operations
// Click -click()
//double click : dblclick()
//right click : click({button:'right'})


import{test,expect} from '@playwright/test'

test("Double click and Right click operations", async({page})=>{

await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
await page.getByText("Double-Click Me To See Alert",{exact:true}).dblclick()
await page.getByText("right click me",{exact:true}).click({button:'right'})
await expect(page.getByText('Delete',{exact:true})).toBeVisible()


await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html")
await page.getByText("Copy Text",{exact:true}).dblclick()
await expect(page.locator("#field2")).toHaveValue("Hello World!")
await page.waitForTimeout(6000)
})

test("Mouse over an element",async({page})=>{

    await page.goto("https://www.spicejet.com/")
    //hover() -hover over an element
    await page.getByText("Travel Policies",{exact:true}).hover()
    await expect(page.getByTestId("test-id-Baggage Information")).toContainText("Baggage");


})

test("Scrolling on the page",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByText("Download Files").scrollIntoViewIfNeeded()
await page.getByText("Download Files",{exact:true}).click()
await expect(page.url()).toContain("download-files")


})

test("Drag and Drop Operations",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com")

//locator.dragTo(locator)
let sourceElement= page.locator("#draggable")
let targetElement=page.locator("#droppable")
//await sourceElement.dragTo(targetElement) 
// custom logic

await sourceElement.hover()
await page.mouse.down()
await targetElement.hover()
await page.mouse.up()
await expect(page.getByText("Dropped!",{exact:true})).toBeVisible();



})


