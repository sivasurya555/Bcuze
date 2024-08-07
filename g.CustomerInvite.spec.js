const { test, expect } = require("@playwright/test");

const Email = "suryapraxio35+1@gmail.com";
const Password = "password";
const Fname = "Mark";
const Lname = "Tector";
const email = "suryapraxio35+5@gmail.com";
const PHno = "78457374367";

test('Customer invite', async ({ page }) => { 
    try {
        await page.goto('http://localhost:5173/');
        await page.getByText("Sign in").click();
        
        await page.fill('input[name="email"]', Email);
        await page.fill('input[name="password"]', Password);
        
        const signInButton = await page.getByRole('button', { name: 'Sign In', exact: true });
        if (await signInButton.isEnabled()) {
            await signInButton.click();
        } else {
            console.error("Sign In button is not enabled");
            return;
        }

        await page.waitForURL('http://localhost:5173/app/tenant/home');
        
        await page.getByText("Customers").click();
        await page.getByRole("button", { name: 'Invite Customer' }).click();
        
        await page.fill('input[name="firstName"]', Fname);
        await page.fill('input[name="lastName"]', Lname);
        await page.fill('input[name="email"]', email);

        // Validate the selector for the phone number field
        const phoneNumberSelector = 'input[name="phoneNumber"]'; // Update this selector if necessary
        await page.waitForSelector(phoneNumberSelector);
        await page.fill(phoneNumberSelector, PHno);

        await page.getByRole("button", { name: 'Send Invite' }).click();
        
        // Add assertions if needed to validate the successful invite
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await page.pause(); // Useful for debugging
    }
});
