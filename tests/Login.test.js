import { test , expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.clickLoginLink();
  await loginPage.enterEmail('johndoe4511331@example.com');
  await loginPage.enterPassword('Password123');
  await loginPage.clickLoginButton();
  await expect(loginPage.verifyLogin).toBeVisible(); // assertion to verify that the user is redirected to the login page after successful registration
  await page.waitForTimeout(9000); 


});