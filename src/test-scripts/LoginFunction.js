const LoginBase = require('../page-objects/LoginBase')
let LoginPage = require('../page-objects/LoginPage_Type_3')

describe('Login Function', () => {
  before(() => {
    // Do sth in common for all test scripts
    // To create testing data for all scripts
    const Login = new LoginBase()
    Login.openTestingPage('https://the-internet.herokuapp.com/login')
  })

  it('Login Failed', () => {
    LoginPage.inputUsername('assa').inputPassword('asdf').clickOnLoginBtn()
  })

  it('Login Passed', () => {
    LoginPage.inputUsername('tomsmith')
      .inputPassword('SuperSecretPassword!')
      .clickOnLoginBtn()
  })

  after(() => {
    // clean up testing data
    console.log('test done')
  })
})
