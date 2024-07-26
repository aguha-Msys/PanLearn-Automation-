const { test, expect } = require("@playwright/test")
const { PanLearnPage } = require("../Page_Object_Classes/HomePage_form")
const { BookADemo } = require("../Page_Object_Classes/BookADemo")
const {
  EnrollForCertification,
} = require("../Page_Object_Classes/EnrollForCertification")

test("POM of PanLearn", async ({ page }) => {
  // goto page
  // 1. fill up
  // 2. book a demo
  // 3. enroll for certification
  const panLearn_page = new PanLearnPage(page)

  await panLearn_page.openUrl()

  await panLearn_page.formFillUp(
    "test",
    "test@email",
    "1234567890",
    "This is a part of an automation practice.",
    true
  )
  //   await page.waitForTimeout(3000)

  const enrollForCertification = new EnrollForCertification(page)
  await enrollForCertification.EnrollForCertification({
    firstName: "test",
    lastName: "run",
    email: "test@email.com",
    phone: "9876543210",
    checkbox: true,
    self: true,
  })

  const book_Demo = new BookADemo(page)

  await book_Demo.bookADemo({
    name: "test",
    email: "test@email.com",
    phone: "1234567890",
    message: "This is a part of an automation practice.",
  })
})
