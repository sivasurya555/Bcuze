const { test, expect } = require("@playwright/test");
const Email = "suryapraxio35+7@gmail.com";
const Pass = "password";
const Name = "Samson";
const Street = "Maple street";
const Locality = "Hawhins school";
const City = "Hawhins";



test('Request Service', async ({ page }) => {
  
    await page.goto('http://urbanpro.localhost:3000/customer/service');
    await page.getByText("Sign In").click();
    await page.fill('input[name="email"]',Email);
    await page.fill('input[name="password"]',Pass);
    await page.getByRole('button',{name:'Sign In'}).click();
    await page.getByText('Interior Work').click();
    await page.getByRole('button',{name:'Request Service'}).click();
    await page.locator('div[class="flex justify-center h-full"]').click();
    await page.fill('input[name="name"]',Name);
    await page.fill('input[name="addressLine1"]',Street);
    await page.fill('input[name="addressLine2"]',Locality);
    await page.fill('input[name="city"]',City);
    await page.getByText('⯆Country').click();
    await page.click('text="America"');



    await page.pause();

});