describe('learning api', () => {
  let pageUrl = 'https://the-internet.herokuapp.com/login'

  let usernameSelctor = '#username'

  it('Get Attribute for username text box', async () => {
    await browser.url(pageUrl)

    await $(usernameSelctor).waitForDisplayed(5000)
    let type = await $(usernameSelctor).getAttribute('type')
    let name = await $(usernameSelctor).getAttribute('name')
    let id = await $(usernameSelctor).getAttribute('id')

    console.log(type)
    console.log(name)
    console.log(id)
  })
})
