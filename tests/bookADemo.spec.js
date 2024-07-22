const {test,expect} = require('@playwright/test')

test('Book a Demo',async ({page})=>{
    // test.slow()
    await page.goto('https://www.panlearn.com/')

    // Book a demo
    await page.getByText("Corporate Training Programs").last().click()
    await page.getByRole('button', { name: 'Book a Demo' }).click()

    const iUndersnt = await page.getByText("I Understand").isVisible()
    if (iUndersnt) {
        await page.getByText("I Understand").click()
    }
    
    await page.frameLocator('iframe[title="Calendly Scheduling Page"]').getByLabel('Thursday, July 25 - Times').click()
    await page.frameLocator('iframe[title="Calendly Scheduling Page"]').getByRole('button', { name: '7:00pm' }).click()
   
    await page.frameLocator('iframe[title="Calendly Scheduling Page"]').getByRole('button',{name: 'Next 7:00pm'}).click()
    
    await page.frameLocator('iframe[title="Calendly Scheduling Page"]').getByLabel('Name *').fill('arka')

    await page.frameLocator('iframe[title="Calendly Scheduling Page"]').getByLabel('Email *').fill('test@email.com')

    await page.frameLocator('iframe[title="Calendly Scheduling Page"]').getByLabel('Phone Number *').fill('0123456789')
    
    await page.frameLocator('iframe[title="Calendly Scheduling Page"]').getByLabel('Please share anything that').fill('lorem ipsum')

    // submit 
    // await page.frameLocator('iframe[title="Calendly Scheduling Page"]').getByRole('button', { name: 'Schedule Event' }).click()
    await page.getByAltText('close-icon').click()
    // await page.waitForTimeout(3000)

})

