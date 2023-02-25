let LoginBase = require('../../page-objects/LoginBase')

const USER_NAME_TEXTBOX = '#username'
const PASSWORD_TEXTBOX = '#password'
const LOGIN_BTN = '[type="submit"]'

class Login extends LoginBase {
  waitForUsernameDisplayed() {
    $(USER_NAME_TEXTBOX).waitForDisplayed(15000)
    return this
  }

  inputUsername(username) {
    $(USER_NAME_TEXTBOX).setValue(username)
    return this
  }

  inputPassword(password) {
    $(PASSWORD_TEXTBOX).setValue(password)
    return this
  }

  clickOnLoginBtn() {
    $(LOGIN_BTN).click()
  }
}

module.exports = new Login()
