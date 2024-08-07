const { test, expect } = require("@playwright/test");
const { TIMEOUT } = require("dns");
const Email = "abarnaabi57+130@gmail.com";
const Password = "password";
const ServiceName = "Fitness Training";
const Title = "Personal Trainer";
const Desc = "Find Best Fitness Training";
const Price = "3000";
const EstHours = "5 Hours";
const Imagepath = "C:/Users/admin/Desktop/Surya/Upload images/hd2.jpg";

test('Login page', async ({ page }) => {
  
    await page.goto('https://bcuze-test.praxio.in/');
    await page.getByText("Sign in").click();
    await page.fill('input[name="email"]',Email);
    await page.fill('input[name="password"]',Password);
    // await page.getByRole("button", { name: "Sign In" }).click();
    // await page.click('button[type="submit"]:has-text("Sign In")');
    const signInButton = await page.getByRole('button', { name: 'Sign In', exact: true });
    if (await signInButton.isEnabled()) {
      await signInButton.click();
    } else {
      // Handle the case where the button is not enabled
    }
    await page.waitForURL('https://bcuze-test.praxio.in/tenant/admin/home');
    await page.getByText('Services').click();
    await page.getByRole('button',{ name:'Add Service'}).click();
    await page.fill('input[name="name"]',ServiceName);
    await page.fill('input[name="shortDescription"]',Title);
    await page.fill('input[name="longDescription"]',Desc);
    await page.getByText("⯆Pricing Model").click();
    await page.getByText('FlatRate').click();
    await page.fill('input[name="price"]',Price);
    await page.getByText("⯆Currency").click();
    await page.getByText('USD').click();
    await page.fill('input[name="estimatedDuration"]',EstHours);
    await page.getByRole('button',{ name:'upload'}).click();
    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles(Imagepath);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    await page.pause();
    await page.screenshot({path: 'screenshot1.png', fullPage: true})
});