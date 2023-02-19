describe('learning api', () => {
  let pageUrl = 'https://the-internet.herokuapp.com/login'
  let screenShotPath = './screenshot/SaveScreenshot.png'

  it('Save Screenshot', async () => {
    await browser.url(pageUrl)

    await browser.saveScreenshot(screenShotPath)
  })
})
