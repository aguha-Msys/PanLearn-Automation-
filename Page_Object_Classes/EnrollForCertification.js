exports.EnrollForCertification = class EnrollForCertification {
  constructor(page) {
  
    this.page = page
    this.page_certificationLink = "//a[text()='Certification']"
    this.page_pmpCertification = "(//a[text()='PMP Certification'])[2]" // "'link', { name: 'PMP Certification', exact: true }"
    this.page_downloadSyllabus = "Download Syllabus" //.first() get by text

    this.page_viewSchedule = "//a[text()='View Schedule']" //"'link', { name: 'View Schedule' }"
    this.page_enrollNowButton = "//button[text()='Enroll Now']" //"'button', { name: 'Enroll Now' }"
    this.page_radioButtonSelf = "//input[@value='true']"
    this.page_radioButtonSomeone = "//input[@value = 'someone']"
    this.page_firstName = "First name *"
    this.page_lastName = "(//input[@id='billing_first_name'])[2]"
    this.page_email = "(//input[@id='billing_first_name'])[3]"
    this.page_phone = "(//input[@id='billing_first_name'])[4]"
    this.page_termsCheckBox = "//input[@type='checkbox']"
    this.page_close = "×"
  }
  async EnrollForCertification({
    firstName,
    lastName,
    email,
    phone,
    checkbox,
    self,
  }) {
    await this.page.locator(this.page_certificationLink).hover()
    await this.page.locator(this.page_pmpCertification).click()

    await this.page.getByText(this.page_downloadSyllabus).first().hover()
    await this.page.locator(this.page_viewSchedule).click()
    await this.page.locator(this.page_enrollNowButton).click()
    if (self) {
      this.page.locator(this.page_radioButtonSelf).check()
    } else this.page.locator(this.page_radioButtonSomeone).check()

    await this.page.getByText(this.page_firstName).fill(firstName)
    await this.page.locator(this.page_lastName).fill(lastName)
    await this.page.locator(this.page_email).fill(email)
    await this.page.locator(this.page_phone).fill(phone)
    if (checkbox) {
      await this.page.locator(this.page_termsCheckBox).check()
    }
    await this.page.getByText(this.page_close).click()
  }
}
