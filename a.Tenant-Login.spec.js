const { test, expect } = require("@playwright/test");
const { url } = require("inspector");
const { loadEnvFile } = require("process");

const Email = "suryapraxio35+10@gmail.com";
const Password = "password";
const emailid = "suryapraxio35+9@gmail.com";
const Fname = "Ben";
const Lname = "Ten";
const PhNo = "9876543210";
const Stime = "10:00 AM";
const Etime = "06:00 PM";
const Designation = "Manager";
const mailID = "suryapraxio35@gmail.com";
const pass = "praxio6635";
const TIMEOUT = 60000;


test('Login page', async ({ page }) => {
  
  await page.goto('http://localhost:5173/home');
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
  await page.waitForURL('http://localhost:5173/app/tenant/home',{timeout: TIMEOUT});
await page.getByText("Employees").click();
await page.waitForURL('http://localhost:5173/app/tenant/employee');
await page.getByRole('button', { name: 'Add' }).click();
await page.fill('input[name="email"]', emailid);
await page.fill('input[name="firstName"]', Fname);
await page.fill('input[name="lastName"]', Lname);
await page.getByText('Male', { exact: true }).click();
await page.fill('input[name="phoneNumber"]', PhNo);
// Convert time from AM/PM format to 24-hour format
function convertTo24HourFormat(time12h) {
  const [time, modifier] = time12h.split(' ');

  let [hours, minutes] = time.split(':');
  hours = parseInt(hours, 10);

  if (hours === 12 && modifier.toLowerCase() === 'am') {
    hours = 0;
  } else if (modifier.toLowerCase() === 'pm' && hours < 12) {
    hours += 12;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes}`;
}

// Usage
const startTime24h = convertTo24HourFormat(Stime);

// Now fill the input field with the 24-hour format time
await page.fill('input[name="startTime"]', startTime24h);
const endTime24h = convertTo24HourFormat(Etime);

// Now fill the input field with the 24-hour format time
await page.fill('input[name="endTime"]', endTime24h);
await page.getByText('Monday', { exact: true }).click();
await page.getByText('Tuesday', { exact: true }).click();
await page.getByText('Wednesday', { exact: true }).click();
await page.getByText('Thursday', { exact: true }).click();
await page.getByText('Friday', { exact: true }).click();
await page.getByText('Field Manager - Assigns tasks and oversees their progress.').click();
await page.fill('input[name="designation"]', Designation);
await page.getByRole('button',{ name:'Send Invite'}).click();
//goto mail inbox
await page.goto('https://mail.google.com/mail/u/0/?ogbl#inbox/FMfcgzGxSbvNCFdtsjrLCMKGkFcPRRZC');
await page.waitForTimeout(3000);

// Fill the email and click 'Next'
await page.fill('input[type="email"]', mailID);
await page.getByText('Next').click();

// Wait for the password input to appear
await page.waitForSelector('input[type="password"]', { timeout: 10000 });

// Fill the password and click 'Next'
await page.fill('input[type="password"]', pass);
await page.getByText('Next').click();

// Wait for the inbox to load by waiting for a known element in the inbox
await page.waitForSelector('div[role="main"]', { timeout: 60000 });

// Continue with your actions after the inbox has loaded
await page.locator('div[role="main"] span').first().click();
await page.getByText('[Action Required] - Zoho Employee Invitation: Join Our Platform Now').click();
await page.pause();


});
