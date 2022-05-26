const SignUpPage = require ("../pages/SignUpPage");
const LogInPage = require ("../pages/LogInPage");
const ConfirmPhoneNumberPage = require ("../pages/ConfirmPhoneNumberPage");
const config = require ("../config");

describe('log in check', () => {
    it('check if user can login with an already created account', async () => {
        await SignUpPage.open()
        await SignUpPage.clickLogIn()
        await LogInPage.fillLogInForm(config.loginEmail, config.password);
    })

    it('check if user is redirected to Confirm your phone number screen after logging in', async () => {
        await browser.pause(3000);
        await ConfirmPhoneNumberPage.checkRedirection();
    })
})