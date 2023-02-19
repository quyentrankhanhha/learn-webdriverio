describe('API learning', () => {
  let baseUrl = 'https://the-internet.herokuapp.com/windows'

  let linkText = '=Click Here'

  it('handle multiple tabs', async () => {
    await browser.url(baseUrl)

    // click on Click Here Link
    await $(linkText).waitForDisplayed(5000)
    $(linkText).click()

    // Get all current windows ID/ array
    let allWindowsIds = await browser.getWindowHandles()
    console.log(allWindowsIds)

    let firstWindowId = await allWindowsIds[0]
    let secondWindowId = await allWindowsIds[1]

    // switch to the second window/ tab
    browser.switchToWindow(secondWindowId)

    // print out the second window title
    let secondWindowTitle = await browser.getTitle()
    console.log('secondWindowTitle', secondWindowTitle)

    // switch to the first window
    browser.switchToWindow(firstWindowId)

    // print out the first window title
    let firstWindowTitle = await browser.getTitle()
    console.log('firstWindowTitle', firstWindowTitle)

    await browser.pause(5000)
  })
})
