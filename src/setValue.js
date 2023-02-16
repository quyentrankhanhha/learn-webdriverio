describe('API learning', () => {
  it('Set value to a text box', async () => {
    await browser.url('https://the-internet.herokuapp.com/login')

    await $('#username').setValue('Ha')

    await browser.pause(3000)
  })
})
