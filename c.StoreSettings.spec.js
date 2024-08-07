const { test, expect } = require("@playwright/test");
const { TIMEOUT } = require("dns");
const Email = "sivansurya555+26@gmail.com";
const Password = "password";
const slogan = "Providing Quality Healthcare Anytime, Anywhere";
const sundomain = "helpee"
const imgpath = "C:/Users/admin/Desktop/Surya/Upload images/hlepee logo.png";

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
    await page.getByText('Store Settings').click();
    await page.getByText('⯆Store Currency').click();
    await page.getByText('Dollar').click();
    await page.fill('input[name="slogan"]',slogan);
    await page.fill('input[name="subDomainName"]',sundomain);
    await page.getByRole('button',{ name:'upload'}).click();
    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles(imgpath);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    await page.screenshot({path: 'screenshot1.png', fullPage: true})

    await page.pause();


});