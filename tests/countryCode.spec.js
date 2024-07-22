const { test, expect } = require("@playwright/test")

test.skip("Country Code Selection", async ({ page }) => {
  await page.goto("https://www.panlearn.com/")

  ////////  Approach 1: Select from dropdown using getby and select option
    await page.getByRole("combobox").selectOption("1")

  ////////// Approach 2: using xpath and loop /////////
/* 
   //   await page.click("//div[@id='slider-form']//select[@name='country_code']")

  const codes = await page.$$(
    "//div[@id='slider-form']//select[@name='country_code']/option"
  )
  for (let code of codes) {
    let option = await code.textContent()
    if (option.includes("India (+91)")) {
      await page.selectOption(
        "//div[@id='slider-form']//select[@name='country_code']",
        option
      )
      console.log("code: " + option)
      break
    }
    // console.log('code: '+ option);
  }
*/
})
