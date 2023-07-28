module.exports = {
  test: client => {
    client
      .url("http://127.0.0.1:5500/#/home")
      .waitForElementVisible(".home-page-main")
      .assert.visible(".section-title")
      .assert.textContains(".section-title", "Vos capteurs")
  }
}
