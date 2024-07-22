const {test,expect} = require('@playwright/test')


test('Hover over Certification and Programs',async({page})=>{

    await page.goto('https://www.panlearn.com/')
    
        // test the hover functions
    // const certificationItems = await page.$$(getByRole('link', { name: 'Certification', exact: true }))
    await page.getByRole('link', { name: 'Certification', exact: true }).hover()
    await page.waitForTimeout(1000)
    const certificationItems = await page.$$("//*[@id='__next']/div[2]/div/div/div[2]/ul[2]/li[1]/ul/li/a")
    await page.locator('//*[@id="__next"]/div[2]/div/div/div[2]/ul[2]/li[2]/a').hover()
    const programs = await page.$$('//*[@id="__next"]/div[2]/div/div/div[2]/ul[2]/li[2]/ul/li/a')

    expect(certificationItems.length).toBe(11)

    for (const item of certificationItems) {
        console.log(await item.textContent());
    }
    console.log(programs.length);

    for (const item of programs) {
        console.log(await item.textContent());
    }
    await expect(programs.length).toBe(5)
})