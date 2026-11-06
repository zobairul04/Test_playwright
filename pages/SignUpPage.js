class SignUpPage {
  constructor(page) {
    this.page = page;
    this.regesterLink = page.locator('a[href="/register"]');
    this.genderRadioButton = page.locator('input[id="gender-male"]');
    this.firstNameInput = page.locator('input[id="FirstName"]');
  }

  async pageopen() {
    await this.page.goto('https://demowebshop.tricentis.com/');
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
}

export { SignUpPage };