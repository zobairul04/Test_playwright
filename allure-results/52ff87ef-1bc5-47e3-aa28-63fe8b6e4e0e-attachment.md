# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.test.js >> Login with valid credentials
- Location: tests\Login.test.js:4:1

# Error details

```
TypeError: page.getbylabel is not a function
```

# Test source

```ts
  1  | import { Base } from "./Base.js";
  2  | class LoginPage extends Base {
  3  |   constructor(page) {
  4  |     super(page);
  5  |     this.loginLink = page.locator('a[href="/login"]');
  6  |     this.emailInput = page.locator('input[id="Email"]');
  7  |     this.passwordInput = page.locator('input[id="Password"]');
  8  |     this.checkbox = page.locator('input[id="RememberMe"]');
> 9  |     this.loginButton = page.getbylabel('Log in');
     |                             ^ TypeError: page.getbylabel is not a function
  10 |     this.verifyLogin = page.locator('a[href="/logout"]');
  11 |   }
  12 | 
  13 |   async clickLoginLink() {
  14 |     await this.clickelement(this.loginLink); // base class ar function
  15 |   }
  16 | 
  17 |   async enterEmail(email) {
  18 |     await this.emailInput.fill(email);
  19 |   }
  20 | 
  21 |   async enterPassword(password) {
  22 |     await this.passwordInput.fill(password);
  23 |   }
  24 |   async clickCheckbox() {
  25 |     await this.clickelement(this.checkbox); // base class ar function
  26 |   }
  27 |   async clickLoginButton() {
  28 |     await this.clickelement(this.loginButton); // base class ar function
  29 |   }
  30 | }
  31 | 
  32 | export { LoginPage };
  33 | 
```