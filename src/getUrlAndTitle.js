describe('learn api', () => {
  let baseUrl = 'https://the-internet.herokuapp.com/'
  let welcomeTextSelector = 'h1'
  let currentUrl = ''
  let currentPageTitle = ''

  it('getUrl and getTitle API', async () => {
    await browser.url(baseUrl)
    await $(welcomeTextSelector).waitForDisplayed(5000)
    currentUrl = browser.getUrl()

    currentPageTitle = browser.getTitle()

    console.log(currentPageTitle)
    console.log(currentUrl)
  })
})
