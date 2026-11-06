import { test } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage.js';

test('has title', async ({ page }) => {
  const signUp = new SignUpPage(page);
  await signUp.pageopen();
  await signUp.clickRegisterLink();
  await signUp.selectGender();
  await signUp.enterFirstName('John');
  
});