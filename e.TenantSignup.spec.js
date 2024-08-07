const {test, expect}= require("@playwright/test");
const Fname ="Beth";
const Lname = "Moony";
const Email = "suryapraxio35+5@gmail.com"
const Pword = "password";
const CPword = "password";
const MailID = "suryapraxio35@gmail.com";
const Pass = "praxio6635"

test('Signup page', async ({ page }) => {
  
    await page.goto('http://localhost:5173/home');
    await page.getByText("Sign in").click();
    await page.getByText("Sign up").click();
    await page.waitForURL('http://localhost:5173/signup');
    await page.fill('input[name="firstName"]',Fname);
    await page.fill('input[name="lastName"]',Lname);
    await page.fill('input[name="email"]',Email);
    await page.fill('input[name="password"]',Pword);
    await page.fill('input[name="confirmPassword"]',CPword);
    await page.click('input[type="checkbox"]');
    await page.getByRole('button',{name:'Sign Up'}).click();
    await page.goto('https://mail.google.com/mail/u/0/#inbox');
    await page.fill('input[type="email"]',MailID);
    await page.getByText('Next').click();
    await page.fill('input[type="password"]',Pass);
    await page.getByText('Next').click();
    await page.waitForURL('https://mail.google.com/mail/u/0/#inbox');
    await page.locator('span[id=":2c"]').click();
    await page.getByRole('link',{name:'Verify email'}).click();

    await page.pause();

});