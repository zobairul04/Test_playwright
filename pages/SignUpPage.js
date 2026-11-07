import { Base } from "./Base.js";
class SignUpPage extends Base {
  constructor(page) {
    super(page);
    this.regesterLink = page.locator('a[href="/register"]');
    this.genderRadioButton = page.locator('input[id="gender-male"]');
    this.firstNameInput = page.locator('input[id="FirstName"]');
    this.lastNameInput = page.locator('input[id="LastName"]');
    this.emailInput = page.locator('input[id="Email"]');
    this.passwordInput = page.locator('input[id="Password"]');
    this.confirmPasswordInput = page.locator('input[id="ConfirmPassword"]');
    this.registerButton = page.locator('input[id="register-button"]');
    this.verifyLogin = page.locator('a[href="/logout"]');
  }

  async clickRegisterLink() {
    await this.clickelement(this.regesterLink); // base class ar function
  }

  async selectGender() {
    await this.clickelement(this.genderRadioButton); // base class ar function
  }

  async enterFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }
  
  async enterLastName(lastName) {
    await this.lastNameInput.fill(lastName);
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async enterConfirmPassword(confirmPassword) {
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async clickRegisterButton() {
    await this.clickelement(this.registerButton); // base class ar function
    // await this.registerButton.click();
  }


}

export { SignUpPage };
