describe('learning api', () => {
  let pageUrl = 'https://the-internet.herokuapp.com/login'

  let usernameSelector = '#username'
  let passwordSelector = '#password'

  let loginBtn = '[type="submit"]'
  let successSelector = 'h2'

  it('Wait for Disappear', async () => {
    await browser.url(pageUrl)

    $(usernameSelector).waitForDisplayed(5000)

    $(usernameSelector).setValue('tomsmith')
    $(passwordSelector).setValue('SuperSecretPassword')

    $(loginBtn).click()

    $(usernameSelector).waitForDisplayed(
      5000,
      true,
      '[ERR] Login process takes longer than 5s'
    )

    let successText = $(successSelector).getText()
    console.log(successText)
  })
})
