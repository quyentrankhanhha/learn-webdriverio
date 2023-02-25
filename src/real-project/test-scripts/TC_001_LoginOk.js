const LoginPage = require('../page-objects/Login')
const LoginData = require('../test-data/TC_001_LoginOk')
describe('LOGIN', () => {
  const LOGIN_DATA = LoginData.VALID_LOGIN_CREDS
  before(() => {
    browser.url('/login')
  })

  it('Login OK', () => {
    LoginPage.inputUsername(LOGIN_DATA.username)
      .inputPassword(LOGIN_DATA.password)
      .clickOnLoginBtn()
  })
})
