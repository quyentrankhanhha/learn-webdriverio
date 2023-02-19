const USER_NAME_TEXTBOX = '#username'
const PASSWORD_TEXTBOX = '#password'
const LOGIN_BTN = '[type="submit"]'

class Login_Page {
  waitForUsernameDisplayed() {
    $(USER_NAME_TEXTBOX).waitForUsernameDisplayed(150000)
  }

  get username() {
    return $(USER_NAME_TEXTBOX)
  }

  get password() {
    return $(PASSWORD_TEXTBOX)
  }

  get loginBtn() {
    return $(LOGIN_BTN)
  }
}

module.exports = new Login_Page()
