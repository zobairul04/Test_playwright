class Base {
  constructor(page) {
    this.page = page;
    this.url = "https://demowebshop.tricentis.com/";
  }

async open() {
    await this.page.goto(this.url, {
      waitUntil: "domcontentloaded",
      timeout: 50000,
    });
  }

  async clickelement(locator) {
    await locator.click();
  }


}

export { Base };