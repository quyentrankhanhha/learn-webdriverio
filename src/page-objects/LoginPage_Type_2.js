const USER_NAME_TEXTBOX = '#username'
const PASSWORD_TEXTBOX = '#password'
const LOGIN_BTN = '[type="submit"]'

class LoginPage {
  waitForUsernameDisplayed() {
    $(USER_NAME_TEXTBOX).waitForDisplayed(15000)
  }

  setCreds(username, password) {
    $(USER_NAME_TEXTBOX).setValue(username)
    $(PASSWORD_TEXTBOX).setValue(password)
    $(LOGIN_BTN).click()
  }
}

module.exports = new LoginPage()
