import { test, expect } from "@playwright/test"

test.only("test INR", async ({ page }) => {
  await page.goto("https://www.panlearn.com/")
  await page.getByRole("link", { name: "Certification", exact: true }).hover()

  await page
    .getByRole("link", { name: "PMP Certification", exact: true })
    .click()
  await page.getByText("Download Syllabus").first().hover()

  await page.getByRole("button", { name: "Enroll Now" }).click()
  const counts = await page
    .locator(".woocommerce-input-wrapper")
    .count()
  console.log(counts)
  let arr = ["test", "run", "aguha@msystechnologies.com", "1234567890"]
  for (let i = 0; i <= counts-2; i++) {
    // await page.waitForTimeout(2000)
    await page
      .locator(".woocommerce-input-wrapper")
      .nth(i)
      .locator("input")
      .fill(arr[i])
  }
  


  await page.getByLabel("I agree to terms and").click()
  await page.getByRole("button", { name: "Proceed to Payment" }).click()

  // Check the price
  let coursePrice = await page
    .locator("#order_review tbody")
    .getByText("₹1050")
    .textContent() //await page.locator('#order_review tbody').getByRole('cell', { name: '₹' })

  coursePrice = Number(coursePrice.replace(/[₹,]/g, "").trim())

  let tax = await page.getByRole("cell", { name: "₹189" }).textContent()
  tax = Number(tax.replace(/[₹,]/g, "").trim())

  const priceLocator = page.locator("//tfoot//td//span[text()='1239']")
  const priceText = await priceLocator.textContent()

  const capturedPrice = Number(priceText.replace(/[₹,]/g, "").trim())

  const taxRate = 18 / 100
  const calculatedSum = Math.ceil(coursePrice + coursePrice * taxRate)

  console.log(`sum: ${calculatedSum} , capturedprice: ${capturedPrice}`)

  await expect(capturedPrice).toBe(calculatedSum)

  await page.getByRole('button', { name: 'Place order' }).click()

  await page.waitForNavigation({ waitUntil: "networkidle" })
  await expect(page.url()).toContain("https://www.panlearn.com/thankyou")

  await page.waitForNavigation({ waitUntil: "networkidle" })
  await expect(page.url()).toMatch("https://www.panlearn.com/")
  
})

test("test US", async ({ page }) => {
  await page.goto("https://www.panlearn.com/")
  await page.getByRole("img", { name: "country Pan Learn" }).click()
  await page.getByText("United States").click()

  await page.getByRole("link", { name: "Certification", exact: true }).hover()

  await page
    .getByRole("link", { name: "PMP Certification", exact: true })
    .click()
  await page.getByText("Download Syllabus").first().hover()

  await page.getByRole("button", { name: "Enroll Now" }).click()

    let arr = ["test", "run", "aguha@msystechnologies.com", "1234567890"]
    for (let i = 0; i <= counts - 2; i++) {
      // await page.waitForTimeout(2000)
      await page
        .locator(".woocommerce-input-wrapper")
        .nth(i)
        .locator("input")
        .fill(arr[i])
    }
  await page.getByLabel("I agree to terms and").check()

  // Check the price

  let coursePrice = await page
    .locator("tbody")
    .getByRole("cell", { name: "$" })
    .textContent()
  coursePrice = Number(coursePrice.replace(/[$,]/g, "").trim())

  let visiblePFee = await page.getByRole("cell", { name: "$2" }).textContent()
  visiblePFee = Number(visiblePFee.replace(/[$,]/g, "").trim())

  let totalVisiblePrice = await page
    .getByRole("cell", { name: "$52" })
    .textContent()

  totalVisiblePrice = Number(totalVisiblePrice.replace(/[$,]/g, "").trim())

  const pfee = 3 / 100

  const calculatedSum = Math.ceil(coursePrice + coursePrice * pfee)

  console.log("totalVp: " + totalVisiblePrice + " cal: " + calculatedSum)
  await page.getByRole("button", { name: "Proceed to Payment" }).click()

  await expect(visiblePFee).toBe(Math.ceil(coursePrice * pfee))
  await expect(totalVisiblePrice).toBe(calculatedSum)

  await page.getByRole("link", { name: "Proceed to PayPal" }).click()
  await page.getByRole("link", { name: "Cancel and return to MSys" }).click()
  await expect(page.url()).toContain(
    "https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-"
  )

  await page.waitForNavigation({ waitUntil: "networkidle" })
  await expect(page.url()).toMatch("https://www.panlearn.com/")
})
