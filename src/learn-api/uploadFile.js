let path = require('path')

describe('API learning', () => {
  let baseUrl = 'https://the-internet.herokuapp.com/upload'

  let chooseFileSelector = '#file-upload'
  let uploadBtnSelector = '#file-submit'

  let resultTextSelector = 'h3'

  it('upload file', async () => {
    await browser.url(baseUrl)

    let fileToUploadRelativePath = path.join(__dirname, './setValue.js')
    const remoteFilePath = await browser.uploadFile(fileToUploadRelativePath)

    await $(chooseFileSelector).waitForDisplayed(5000)

    $(chooseFileSelector).setValue(remoteFilePath)
    $(uploadBtnSelector).click()

    await browser.pause(5000)

    await $(resultTextSelector).waitForDisplayed(5000)

    currentText = await $(resultTextSelector).getText()
    console.log(currentText)
  })
})
