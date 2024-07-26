exports.BookADemo = class BookADemo {
  constructor(page) {
    this.page = page
    this.page_CorporateTrainingPrograms =
      "(//a[text()='Corporate Training Programs'])[3]"
    // "'link',{name: 'Corporate Training Programs'}" // .last()  //a[text()='Corporate Training Programs']
    this.page_bookADemoButton = "//button[text()='Book a Demo']" //"('button'), { name: 'Book a Demo' }"
    this.page_cookie_I_Understand_button = "I Understand"
    this.page_innerFrame = 'iframe[title="Calendly Scheduling Page"]'
    this.page_innerFrame_selectDate = "Thursday, July 25 - Times" // get by label
    this.page_innerFrame_selectTime = "//button[text()='7:00pm']" //"('button'), { name: '7:00pm' }" //get by role
    this.page_innerFrame_nextButton = "//button[text()='Next 7:00pm']" //"'button',{name: 'Next 7:00pm'}" // get by role
    this.page_innerFrame_name = "Name *" // get by label
    this.page_innerFrame_email = "Email *" // get by label
    this.page_innerFrame_phone = "Phone Number *" // get by label
    this.page_innerFrame_message = "Please share anything that" // get by text
    this.page_innerFrame_submitButton = '("button"), { name: "Schedule Event" }'
    this.page_innerFrame_close = "close-icon" // get by alt text
  }

  async bookADemo({ name, email, phone, message }) {
    const CTP = await this.page.locator(this.page_CorporateTrainingPrograms)
    // .scrollIntoViewIfNeeded()

    await CTP.waitFor({ state: "visible", timeout: 5000 })
    await CTP.click()
    await this.page.locator(this.page_bookADemoButton).click() // getbyRole to locator

    const isVisible = await this.page
      .getByText(this.page_cookie_I_Understand_button)
      .isVisible()

    if (isVisible) {
      await this.page.getByText(this.page_cookie_I_Understand_button).click()
    }

    const selectDate = await this.page.frameLocator(this.page_innerFrame)

    await selectDate.waitFor()
    await selectDate.getByLabel(this.page_innerFrame_selectDate).click()

    await this.page
      .frameLocator(this.page_innerFrame)
      .locator(this.page_innerFrame_selectTime) //getbyRole to locator
      .click()

    await this.page
      .frameLocator(this.page_innerFrame)
      .locator(this.page_innerFrame_nextButton) //getbyRole to locator
      .click()

    await this.page
      .frameLocator(this.page_innerFrame)
      .getByLabel(this.page_innerFrame_name)
      .fill(name)

    await this.page
      .frameLocator(this.page_innerFrame)
      .getByLabel(this.page_innerFrame_email)
      .fill(email)

    await this.page
      .frameLocator(this.page_innerFrame)
      .getByLabel(this.page_innerFrame_phone)
      .fill(phone)

    await this.page
      .frameLocator(this.page_innerFrame)
      .getByLabel(this.page_innerFrame_message)
      .fill(message)

    //submit

    // await this.page.getByRole(this.page_innerFrame_submitButton).click()

    await this.page.getByAltText(this.page_innerFrame_close).click()
  }
}
