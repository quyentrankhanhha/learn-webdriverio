const LoginPage = require('../page-objects/LoginPage_Type_3')

describe('Page Object Type 3', () => {
  it('Login to the page', () => {
    // open the page
    LoginPage.openTestingPage('/login')
    // set creds
    LoginPage.waitForUsernameDisplayed()
      .inputUsername('A')
      .inputPassword('A')
      .clickOnLoginBtn()

    // wait a little to see result
    browser.pause(2000)
  })
})
