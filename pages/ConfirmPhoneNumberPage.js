const expectChai = require('chai').expect;

class ConfirmPhoneNumberPage {

    get phoneValidateForm() {return $("//div[@automation-id='phonevalidate']")};

    async checkRedirection () {
        let bool = await this.phoneValidateForm.isDisplayed();
        let expectedMessage = "User is successfully redirected to Confirm Your Phone Number page"
        let message;
            if (bool === true){
                message = expectedMessage;
            }
            else {
                message = "User is not redirected to Confirm Your Phone Number page";
            }
        expectChai(message).to.equal(expectedMessage);
        console.log("\x1b[32mLog " + message + "\x1b[0m");
    }
}

module.exports = new ConfirmPhoneNumberPage();