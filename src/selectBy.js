describe('API learning', () => {
  let baseUrl = 'https://the-internet.herokuapp.com/dropdown'

  let dropDownSelector = '#dropdown'

  it('handle dropdown menu', async () => {
    await browser.url(baseUrl)

    await $(dropDownSelector).waitForDisplayed(5000)
    await $(dropDownSelector).selectByVisibleText('Option 1')

    await browser.pause(3000)

    await $(dropDownSelector).selectByAttribute('value', '2')

    await browser.pause(3000)
  })
})
