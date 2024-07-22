const {test,expect} = require('@playwright/test')

test('Home Page',async ({page})=>{
    // test.slow()
    await page.goto('https://www.panlearn.com/')

    await page.fill('//*[@id="banner_form"]/div[1]/input[1]', 'Arka Guha')
    await page.click('//*[@id="banner_form"]/div[1]/select')

    await page.getByRole("combobox").selectOption("1")


    await page.fill('//*[@id="banner_form"]/div[1]/input[4]', '0123456789')
    await page.fill('//*[@id="banner_form"]/div[1]/input[5]','test@email.com')
    await page.fill('//*[@id="banner_form"]/div[1]/textarea','This is a part of the automation training. ')
    await page.getByRole('checkbox').check()
    // await page.waitForTimeout(3000)
    // await page.click("getByRole('button', { name: 'Submit' })")

})