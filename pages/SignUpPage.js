const elementUtil = require ("../util/elementUtil");

class SignUpPage {

    get emailInput() {return $("//input[@id = 'input_0']")};
    get passwordInput() {return $("//input[@id = 'input_1']")};
    get createAccountButton() {return $("#AP_FirstPage_CreateAccount")};
    get loginButton() {return $("//span[contains(text(), 'Log In')]")};

    async open () {
        await browser.url('');
        await browser.maximizeWindow();
    }

    async fillSignUpForm (email, password) {
        elementUtil.setValueToElement(await this.emailInput, email);
        elementUtil.setValueToElement(await this.passwordInput, password);
        await browser.pause(3000);
        elementUtil.clickOnElement(await this.createAccountButton);
        await browser.pause(5000);
    }

    async clickLogIn (){
        elementUtil.clickOnElement(await this.loginButton);
    }

}

module.exports = new SignUpPage();