exports.PanLearnPage = class PanLearnPage {
  constructor(page) {
    this.page = page
    this.pageUrl = "https://www.panlearn.com/"
    this.pageNameInput = '//*[@id="banner_form"]/div[1]/input[1]'
    this.pageCountryCode = "combobox"
    this.pagePhNumber = '//*[@id="banner_form"]/div[1]/input[4]'
    this.pageEmail = '//*[@id="banner_form"]/div[1]/input[5]'
    this.pageTextArea = '//*[@id="banner_form"]/div[1]/textarea'
    this.pageCheckBox = "checkbox"
    this.pageSubmitButton = "'button', { name: 'Submit' }"
  }

  async openUrl(params) {
    await this.page.goto(this.pageUrl)
  }

  async formFillUp(name, email, ph, message, checkbox) {
    await this.page.fill(this.pageNameInput, name)
    await this.page.getByRole(this.pageCountryCode).selectOption("1")
    await this.page.fill(this.pagePhNumber, ph)
    await this.page.fill(this.pageEmail, email)
    await this.page.fill(this.pageTextArea, message)
    if (checkbox) {
      await this.page.getByRole(this.pageCheckBox).check()
    }
    // await this.page.getByRole(this.pageSubmitButton).click()  // Submit is disabled as it is not required for now
  }
}
