module.exports = {
  test: client => {
    client
      .url("http://127.0.0.1:5500/")
      .waitForElementVisible('.sign-in-page', 10 * 1000)
      .assert.visible('input[type=email]')
      .setValue('input[type=email]', 'thomas@facadia.com')
      .assert.visible('input[type=password]')
      .setValue('input[type=password]', 'azerty')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .waitForElementVisible(".home-page-main")
      .assert.visible(".section-title")
      .assert.textContains(".section-title", "Vos capteurs")
  }
}
