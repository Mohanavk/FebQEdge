import {test,expect} from '@playwright/test';

//multiple tabs/windows - pop event- page.waitFor Event()
//Dialog -dialog is a class in PW
//accept("optional parameter")- accept the alert by clicking on OK/submit/yes
//dismiss()- dismisses the alert by clicking on cancel/No
//message()-get the text value displaeyd on the alert.
///alerts- dialog event appeared on the page -page.on("event",function)
//page.on() is used to listen to events happening on thepage

test('Handling simple alert',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    //on(event)wait for an event to appear on the page.

    page.on("dialog",async(dialog)=>{

        console.log(dialog.message())
        await dialog.accept()//click ok
    })
    await page.locator("#alertBtn").click()
    await page.locator("#confirmBtn").click()
    await expect(page.locator("#demo")).toHaveText("You pressed OK!")
});
test('Handling confirm alert',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    //on(event)wait for an event to appear on the page.

    page.on("dialog",async(dialog)=>{

        console.log(dialog.message())
        await dialog.dismiss()//clicks ok
    })
    await page.locator("#alertBtn").click()
    await page.locator("#confirmBtn").click()
    await expect(page.locator("#demo")).toHaveText("You pressed Cancel!")
});

test('Handling prompt alert',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    //on(event)wait for an event to appear on the page.

    page.on("dialog",async(dialog)=>{

        console.log(dialog.message())
        await dialog.accept("Harry Potter")//clicks ok
    })
    //await page.locator("#alertBtn").click()
    //await page.locator("#confirmBtn").click()
    await page.locator("#promptBtn").click()
    await expect(page.locator("#demo")).toHaveText("Hello Harry Potter! How are you today?")
});