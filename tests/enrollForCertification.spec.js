const {test,expect} = require('@playwright/test')


test('Enroll for certification',async({page})=>{
    await page.goto('https://www.panlearn.com/');
    await page.getByRole('link', { name: 'Certification', exact: true }).hover()

    await page.getByRole('link', { name: 'PMP Certification', exact: true }).click();
   
    await page.getByText('Download Syllabus').first().hover()
    await page.getByRole('link', { name: 'View Schedule' }).click();
    await page.getByRole('button', { name: 'Enroll Now' }).click();

    await page.getByLabel('First name *').fill('Test')
    await page.getByLabel("Last name *").fill("Run")

    // await page.locator('p').filter({ hasText: 'Last name *' }).locator('#billing_first_name').fill('Run')
    await page.locator('p').filter({ hasText: 'Email address *' }).locator('#billing_first_name').fill('test@email.com')
    await page.locator('p').filter({ hasText: 'Phone *' }).locator('#billing_first_name').fill('0987654321')
    await page.getByLabel('I agree to terms and').check()
    await page.getByText('×').click();
})