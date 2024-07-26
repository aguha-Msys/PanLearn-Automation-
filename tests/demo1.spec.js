import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto("https://www.panlearn.com/")
  await page.getByRole("img", { name: "country Pan Learn" }).click({
    button: "right",
  })
  await page.getByRole("img", { name: "country Pan Learn" }).click()
  await page.getByText("United States").click()
  await page
    .getByRole("link", { name: "PMP Certification", exact: true })
    .click()
  await page.getByRole("button", { name: "Enroll Now" }).click()
  await page.getByLabel("First name *").click()
  await page.getByLabel("First name *").fill("test")
  await page
    .locator("p")
    .filter({ hasText: "Last name *" })
    .locator("#billing_first_name")
    .click()
  await page
    .locator("p")
    .filter({ hasText: "Last name *" })
    .locator("#billing_first_name")
    .fill("run")
  await page
    .locator("p")
    .filter({ hasText: "Email address *" })
    .locator("#billing_first_name")
    .click()
  await page
    .locator("p")
    .filter({ hasText: "Email address *" })
    .locator("#billing_first_name")
    .fill("test@email.com")
  await page
    .locator("p")
    .filter({ hasText: "Phone *" })
    .locator("#billing_first_name")
    .click()
  await page
    .locator("p")
    .filter({ hasText: "Phone *" })
    .locator("#billing_first_name")
    .fill("1234567890")
  await page.getByLabel("I agree to terms and").check()
  await page.locator("tbody").getByRole("cell", { name: "$" }).click()
  await page.getByRole("cell", { name: "$2" }).click()
  await page.getByRole("cell", { name: "$52" }).click()
  await page.getByRole("button", { name: "Proceed to Payment" }).click()
})
