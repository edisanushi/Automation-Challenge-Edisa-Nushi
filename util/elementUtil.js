class elementUtil {
    
    // basic functions that will be used on other classes

        async setValueToElement(element, value){
            await element.waitForDisplayed({timeout: 5000});
            await element.setValue(value);
        }
    
        async clickOnElement(element){
            await element.waitForExist({timeout: 5000});
            await element.waitForDisplayed({timeout: 5000});
            await element.click();
        }
    }
    
    module.exports = new elementUtil();