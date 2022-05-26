// generates a random email so that each sign up test will a have a new email to register
function generateRandomEmail() {
    let randomChar = Math.floor((Math.random() * 1000000000000) + 1)
    let randomEmail = "edisa" + randomChar + "@mailinator.com";
    return randomEmail;
}

module.exports = {
    email: generateRandomEmail(),
    password: "Edisa1234!",
    firstName: "Edisa",
    lastName: "Nushi",
    mobileNumber: "7589577506",
    zipCode: "02090",
    loginEmail: "edisa2598@mailinator.com"
}