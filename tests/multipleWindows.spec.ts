//Multiple tabs/windwos -"" pop up "event is resposible for creation of multiple tabs using page.waitForEvent("popup")
//page.waitForEvent waits for the popup/new page opens.we can store it in a variable.
//const page1=page.waitForEvent("popup")


//Handling Multiple tabs/windows-step by step process

//1.launch the url
//2.will wait for pop up event to appear on the page without using await- const page1=page.waitForEvenet("popup")
//3.Identify and clcik on the element which is responsible for generation of popup event.
//4. wait for the final result of the popup event - const newPage=await(this waits for sucess or rejected status)page1
//newPage object will handle all actions on the new page.
//come back to original page - use page fixture


import{test,expect} from '@playwright/test'

test("handling multiple tabs and windows", async({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html")
    const page1=page.waitForEvent("popup") // waits till popup event opens a new tab
    await page.locator(".btn btn-info").click()
    const newPage=await page1





})