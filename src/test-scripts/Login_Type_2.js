const LoginPage = require('../page-objects/LoginPage_Type_2')

describe('Page Object Type 2', () => {
  it('Login to the page', () => {
    // open the page
    browser.url('https://the-internet.herokuapp.com/login')

    // set creds
    LoginPage.waitForUsernameDisplayed()
    LoginPage.setCreds('A', 'haha')

    // wait a little to see result
    browser.pause(2000)
  })
})
