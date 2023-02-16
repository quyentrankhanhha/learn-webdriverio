describe('API learning', () => {
  let baseUrl = 'https://the-internet.herokuapp.com/dropdown'

  let textSelector = 'h3'
  let currentText = ''

  it('get Text', async () => {
    await browser.url(baseUrl)

    await $(textSelector).waitForDisplayed(5000)
    currentText = await $(textSelector).getText()

    await browser.pause(1000)
  })
})
