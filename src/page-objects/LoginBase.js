class LoginBase {
  openTestingPage(path) {
    console.log(path)
    browser.url(path)
  }
}

module.exports = LoginBase
