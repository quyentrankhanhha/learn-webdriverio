describe('learning api', () => {
  let pageUrl = 'https://the-internet.herokuapp.com/'

  let welcomeTextSelector = 'h1'

  it('Get Color CSS value', async () => {
    await browser.url(pageUrl)

    await $(welcomeTextSelector).waitForDisplayed(5000)
    let colorValue = await $(welcomeTextSelector).getCSSProperty('color')

    console.log(colorValue)
  })
})
