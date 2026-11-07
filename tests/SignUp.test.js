import { test , expect} from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage.js';

test('Register new user', async ({ page }) => {
  const signUp = new SignUpPage(page);
  await signUp.open();
  await signUp.clickRegisterLink();
  await signUp.selectGender();
  await signUp.enterFirstName('John');
  await signUp.enterLastName('Doe');
  await signUp.enterEmail('johndoe4511331@example.com');
  await signUp.enterPassword('Password123');
  await signUp.enterConfirmPassword('Password123');
  await signUp.clickRegisterButton();
  await expect(signUp.verifyLogin).toBeVisible(); // assertion to verify that the user is redirected to the login page after successful registration  
  await page.waitForTimeout(9000); 


});