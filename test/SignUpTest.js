const SignUpPage = require ("../pages/SignUpPage");
const BasicInfoPage = require ("../pages/BasicinfoPage");
const ConfirmPhoneNumberPage = require ("../pages/ConfirmPhoneNumberPage");
const config = require ("../config");


describe('sign up and two next steps health check', () => {
    it('check if sign up is successful', async () => {
        await SignUpPage.open()
        await SignUpPage.fillSignUpForm(config.email, config.password);
    })

    it('check if happy path is successful for basic info screen', async () => {
        await BasicInfoPage.checkifContinueButtonEnabled(false);
        await BasicInfoPage.fillBasicInfo(config.firstName, config.lastName, config.mobileNumber, config.zipCode);
        await BasicInfoPage.checkifContinueButtonEnabled(true);
        await browser.pause(3000);
        await BasicInfoPage.submitBasicInfo();
        await browser.pause(3000);
    })

    it('check if user is redirected to Confirm your phone number screen after completing basic info', async () => {
        await browser.pause(3000);
        await ConfirmPhoneNumberPage.checkRedirection();
    })
})