describe('learning api', () => {
  let loginUrl = 'https://the-internet.herokuapp.com/login'
  let usernameSelector = '#username'
  let passwordSelector = '#password'

  it('waitForDisplayed ', async () => {
    await browser.url(loginUrl)
    await $(usernameSelector).waitForDisplayed(5000)

    $(usernameSelector).setValue('Ha')
    $(passwordSelector).setValue('Ha')

    await browser.pause(3000)
  })
})
