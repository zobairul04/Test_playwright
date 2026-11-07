import { Base } from "./Base.js";
class LoginPage extends Base {
  constructor(page) {
    super(page);
    this.loginLink = page.locator('a[href="/login"]');
    this.emailInput = page.locator('input[id="Email"]');
    this.passwordInput = page.locator('input[id="Password"]');
    this.checkbox = page.locator('input[id="RememberMe"]');
    this.loginButton = page.getByRole("button", {
      name: "Log in",
      exact: true,
    });
    this.verifyLogin = page.locator('a[href="/logout"]');
  }

  async clickLoginLink() {
    await this.clickelement(this.loginLink); // base class ar function
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }
  async clickCheckbox() {
    await this.clickelement(this.checkbox); // base class ar function
  }
  
  async clickLoginButton() {
    await this.clickelement(this.loginButton); // base class ar function
  }
}

export { LoginPage };
