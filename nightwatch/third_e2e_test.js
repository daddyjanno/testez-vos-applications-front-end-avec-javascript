module.exports = {
  test: client => {
    client
      .url("http://127.0.0.1:5500/#/facade-details")
      .waitForElementVisible(".sensor-details-main")
      .assert.visible(".section-title")
      .assert.textContains(".section-title", "Détails du capteur #7")
  }
}
