const elementUtil = require("../util/elementUtil")
const expectChai = require('chai').expect;

class BasicInfoPage{

    get firstName() {return $("//input[@id = 'input_2']")};
    get lastName() {return $("//input[@id = 'input_3']")};
    get mobileNumber() {return $("//input[@id = 'input_4']")};
    get zipCode() {return $("//input[@id = 'input_5']")};
    get RNQualification() {return $("//md-radio-button[@id = 'radio_8']")};
    get shiftTypeDay() {return $("//md-checkbox[@ng-model='user.profile.shiftType.day']")};
    get shiftTypeWeekday() {return $("//md-checkbox[@ng-model='user.profile.shiftType.weekday']")};
    get workExperience() {return $("//md-radio-button[@id = 'radio_10']")};
    get agreeTermsAndPolicy() {return $("//md-checkbox[@ng-model='user.termsAccept']")};
    get continueButton() {return $("//button[@id='AP_Basic_Info_continue']")};


    //actions on this page


//checks if Continue button is enabled and outputs error message if:
// 1. the button is enabled when no fields are completed
// 2. the button is disabled even though the fields are completed with correct information.
    async checkifContinueButtonEnabled(desiredState){
        let bool = await this.continueButton.isClickable();
        let expectedMessage;
        let message;

        if (desiredState === true){
            expectedMessage = "Continue button is clickable";
        }
        else{
            expectedMessage = "Continue button is not clickable";
        }
           
        if (bool === true){
                message = "Continue button is clickable"
        }
        else {
                message = "Continue button is not clickable";
        }

        expectChai(message).to.equal(expectedMessage);
        console.log("\x1b[32mLog " + message + "\x1b[0m");
    }


// fills information on all the fields and checks the checkbox for agreeing to Terms and Connditions and Privacy Policy
    async fillBasicInfo(fName, lName, mbNumber, zpCode){
        elementUtil.setValueToElement(await this.firstName, fName);
        elementUtil.setValueToElement(await this.lastName, lName);
        elementUtil.setValueToElement(await this.mobileNumber, mbNumber);
        elementUtil.setValueToElement(await this.zipCode, zpCode);
        elementUtil.clickOnElement(await this.RNQualification);
        elementUtil.clickOnElement(await this.shiftTypeDay);
        elementUtil.clickOnElement(await this.shiftTypeWeekday);
        elementUtil.clickOnElement(await this.workExperience);
        elementUtil.clickOnElement(await this.agreeTermsAndPolicy);
    }


//clicks on the Continue button
    async submitBasicInfo () {
        elementUtil.clickOnElement(await this.continueButton);
        await browser.pause(3000);
    }

}

module.exports = new BasicInfoPage();