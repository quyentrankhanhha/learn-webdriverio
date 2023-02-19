describe('API learning', () => {
  let baseUrl = 'https://the-internet.herokuapp.com/'

  let jsLinkText = '=JavaScript Alerts'
  let jsConfirmElementSelector = '[onClick="jsConfirm()"]'

  it('alert handle', async () => {
    await browser.url(baseUrl)

    await $(jsLinkText).waitForDisplayed(5000)
    $(jsLinkText).click()

    await $(jsConfirmElementSelector).waitForDisplayed(5000)
    $(jsConfirmElementSelector).click()

    let alertText = await browser.getAlertText()
    console.log(alertText)

    browser.acceptAlert()
    $(jsConfirmElementSelector).click()
    browser.dismissAlert()

    await browser.pause(3000)
  })
})
