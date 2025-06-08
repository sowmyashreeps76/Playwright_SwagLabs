import { test, expect } from '@playwright/test';

test("Verify login with valid credentials", async ({page})=>{

await page.goto("https://www.saucedemo.com/v1/")

await page.locator("input[name='user-name']").fill("standard_user")

await page.locator("input[type='password']").fill("secret_sauce")

await page.locator("input[type='submit']").click()

await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')

}

)

test("Verify login with Invalid username and valid password", async ({page})=>{

await page.goto("https://www.saucedemo.com/v1/")

await page.locator("input[name='user-name']").fill("abcd7699")

await page.locator("input[type='password']").fill("secret_sauce")

await page.locator("input[type='submit']").click()

await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

}

)
test("Verify login with valid username and Invalid password", async ({page})=>{

await page.goto("https://www.saucedemo.com/v1/")

await page.locator("input[name='user-name']").fill("standard_user")

await page.locator("input[type='password']").fill("djkhfgwe")

await page.locator("input[type='submit']").click()

await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

}

)

test("Verify login with Invalid username and Invalid password", async ({page})=>{

await page.goto("https://www.saucedemo.com/v1/")

await page.locator("input[name='user-name']").fill("jiosdfujguiry")

await page.locator("input[type='password']").fill("djkhfgwe")

await page.locator("input[type='submit']").click()

await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

}

)
