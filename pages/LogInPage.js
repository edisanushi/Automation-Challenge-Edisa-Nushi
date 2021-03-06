const elementUtil = require ("../util/elementUtil");

class LogInPage {

    get emailInput() {return $("//input[@type='email']")};
    get passwordInput() {return $("//input[@type='password']")};
    get loginButton() {return $("#AP_FirstPage_LogIn")};

// actions on this page


// Fills the credentials of an already registered user and clicks on Log In button
    async fillLogInForm (email, password) {
        elementUtil.setValueToElement(await this.emailInput, email);
        elementUtil.setValueToElement(await this.passwordInput, password);
        await browser.pause(3000);
        elementUtil.clickOnElement(await this.loginButton);
        await browser.pause(5000);
    }

}

module.exports = new LogInPage();