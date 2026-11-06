import { test } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage.js';

test('Register new user', async ({ page }) => {
  const signUp = new SignUpPage(page);
  await signUp.pageopen();
  await signUp.clickRegisterLink();
  await signUp.selectGender();
  await signUp.enterFirstName('John');
  await signUp.enterLastName('Doe');
  await signUp.enterEmail('johndoe1111111@example.com');
  await signUp.enterPassword('Password123');
  await signUp.enterConfirmPassword('Password123');
  await signUp.clickRegisterButton();
  await page.waitForTimeout(9000); 

});