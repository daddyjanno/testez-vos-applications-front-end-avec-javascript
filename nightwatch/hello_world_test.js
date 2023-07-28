module.exports = {
    test: client => {
        client
            .url('https://duckduckgo.com/')
            .waitForElementVisible('#logo_homepage_link', 10 * 1000)
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'hello world')
            .assert.visible('input[type=submit]')
            .click('input[type=submit')
            .waitForElementVisible('.results--main')
            .assert.visible('#r1-0')
            .assert.visible('a[data-testid=result-title-a]')
            .assert.textContains('a[data-testid=result-title-a]', 'Hello world — Wikipédia')
            .click('a[data-testid=result-title-a]')
            .assert.visible('#firstHeading')
            .assert.textContains('#firstHeading', 'Hello world')
    }
}
