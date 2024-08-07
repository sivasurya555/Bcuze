const { test, expect } = require("@playwright/test");
const { TIMEOUT } = require("dns");
const Email = "sivansurya555+26@gmail.com";
const Password = "password";
const imgpath = "C:/Users/admin/Desktop/Surya/Upload images/hitech.jpg"
const insta = "https://www.quikr.com/"
const fb = "https://www.quikr.com/"

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
    await page.getByText('Customize theme').click();
    await page.getByText('⯆Select Screen to Edit').click();
    await page.getByText('Login Screen').click();
    await page.getByText('⯆Select your Primary Color').click();
    await page.getByText('red-600').nth(1).click();
    await page.getByRole('button',{ name:'upload'}).click();
    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles(imgpath);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    await page.getByRole('button',{name:'Save'}).click();
    await page.getByText('⯆Select Screen to Edit').click();
    await page.getByText('Footer').click();
    await page.fill('input[name="instagram"]',insta);
    await page.fill('input[name="facebook"]',fb);
    await page.getByRole('button',{name:'Save'}).click();
    await page.getByText('⯆Select Screen to Edit').click();
    await page.getByText('Service Description').click();
    await page.getByText('ratings').click();
    await page.getByText('reviews',{exact:true}).click();
    await page.getByRole('button',{name:'Save'}).click();

    await page.pause();

});