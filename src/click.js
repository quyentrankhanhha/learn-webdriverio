describe('learning api', () => {
  const MAX_WAIT_TIME = 5000

  let pageUrl = 'https://the-internet.herokuapp.com/'
  let formAuthenLinkText = '=Form Authentication'

  let usernameSelector = '#username'
  let passwordSelector = '#password'

  let loginBtn = '[type="submit"]'

  it('Click on link text ', () => {
    browser.url(pageUrl)

    $(formAuthenLinkText).waitForDisplayed(MAX_WAIT_TIME)
    $(formAuthenLinkText).click()

    $(usernameSelector).waitForDisplayed(MAX_WAIT_TIME)
    $(usernameSelector).setValue('Ha')
    $(passwordSelector).setValue('Ha')

    $(loginBtn).click()

    browser.pause(MAX_WAIT_TIME)
  })
})
