# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SignUp.test.js >> Register new user
- Location: tests\SignUp.test.js:4:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[href="/logout"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('a[href="/logout"]') with timeout 5000ms
  - waiting for locator('a[href="/logout"]')

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- heading "Register" [level=1]
- list:
  - listitem: The specified email already exists
- strong: Your Personal Details
- text: "Gender:"
- radio "Male" [checked]
- text: Male
- radio "Female"
- text: "Female First name:"
- textbox "First name:": John
- text: "* Last name:"
- textbox "Last name:": Doe
- text: "* Email:"
- textbox "Email:": johndoe11331@example.com
- text: "*"
- strong: Your Password
- text: "Password:"
- textbox "Password:": Password123
- text: "* Confirm password:"
- textbox "Confirm password:": Password123
- text: "*"
- button "Register"
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test , expect} from '@playwright/test';
  2  | import { SignUpPage } from '../pages/SignUpPage.js';
  3  | 
  4  | test('Register new user', async ({ page }) => {
  5  |   const signUp = new SignUpPage(page);
  6  |   await signUp.open();
  7  |   await signUp.clickRegisterLink();
  8  |   await signUp.selectGender();
  9  |   await signUp.enterFirstName('John');
  10 |   await signUp.enterLastName('Doe');
  11 |   await signUp.enterEmail('johndoe11331@example.com');
  12 |   await signUp.enterPassword('Password123');
  13 |   await signUp.enterConfirmPassword('Password123');
  14 |   await signUp.clickRegisterButton();
> 15 |   await expect(signUp.verifyLogin).toBeVisible(); // assertion to verify that the user is redirected to the login page after successful registration  
     |                                    ^ Error: expect(locator).toBeVisible() failed
  16 |   await page.waitForTimeout(9000); 
  17 | 
  18 | 
  19 | });
```