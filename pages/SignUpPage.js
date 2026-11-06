import { time } from "node:console";

class SignUpPage {
  constructor(page) {
    this.page = page;
    this.regesterLink = page.locator('a[href="/register"]');
    this.genderRadioButton = page.locator('input[id="gender-male"]');
    this.firstNameInput = page.locator('input[id="FirstName"]');
    this.lastNameInput = page.locator('input[id="LastName"]');
    this.emailInput = page.locator('input[id="Email"]');
    this.passwordInput = page.locator('input[id="Password"]');
    this.confirmPasswordInput = page.locator('input[id="ConfirmPassword"]');
    this.registerButton = page.locator('input[id="register-button"]');
  }

  async pageopen() {
    await this.page.goto("https://demowebshop.tricentis.com/", {
      waitUntil: "domcontentloaded",
      timeout: 50000,
    });
  }


  async clickRegisterLink() {
    await this.regesterLink.click();
  }

  async selectGender() {
    await this.genderRadioButton.check();
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
    await this.registerButton.click();
  }


}

export { SignUpPage };
