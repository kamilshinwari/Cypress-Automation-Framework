class BasePage {
    /**
     * Navigates to a specific path
     * @param {string} path 
     */
    open(path) {
        cy.visit(path);
    }

    /**
     * Clicks on an element identified by the selector
     * @param {string} selector 
     */
    click(selector) {
        cy.get(selector).click();
    }

    /**
     * Force clicks on an element
     * @param {string} selector 
     */
    forceClick(selector) {
        cy.get(selector).click({ force: true });
    }

    /**
     * Right clicks on an element
     * @param {string} selector 
     */
    rightClick(selector) {
        cy.get(selector).rightclick();
    }

    /**
     * Double clicks on an element
     * @param {string} selector 
     */
    doubleClick(selector) {
        cy.get(selector).dblclick();
    }

    /**
     * Fills an input field with the specified text
     * @param {string} selector 
     * @param {string} text 
     */
    fill(selector, text) {
        cy.get(selector).type(text);
    }

    /**
     * Clears an input field and then fills it with specified text
     * @param {string} selector 
     * @param {string} text 
     */
    clearAndFill(selector, text) {
        cy.get(selector).clear().type(text);
    }

    /**
     * Selects an option from a dropdown
     * @param {string} selector 
     * @param {string} valueOrText 
     */
    select(selector, valueOrText) {
        cy.get(selector).select(valueOrText);
    }

    /**
     * Checks a checkbox or radio button
     * @param {string} selector 
     */
    check(selector) {
        cy.get(selector).check();
    }

    /**
     * Unchecks a checkbox
     * @param {string} selector 
     */
    uncheck(selector) {
        cy.get(selector).uncheck();
    }

    /**
     * Hovers over an element
     * @param {string} selector 
     */
    hover(selector) {
        cy.get(selector).trigger('mouseover');
    }

    /**
     * Scrolls an element into view
     * @param {string} selector 
     */
    scrollTo(selector) {
        cy.get(selector).scrollIntoView();
    }

    /**
     * Waits for a specified amount of time in milliseconds
     * @param {number} ms 
     */
    wait(ms) {
        cy.wait(ms);
    }

    /**
     * Reloads the current page
     */
    reload() {
        cy.reload();
    }

    /**
     * Goes back in browser history
     */
    goBack() {
        cy.go('back');
    }

    /**
     * Goes forward in browser history
     */
    goForward() {
        cy.go('forward');
    }

    /**
     * Asserts that an element should have a specific text
     * @param {string} selector 
     * @param {string} text 
     */
    verifyText(selector, text) {
        cy.get(selector).should('have.text', text);
    }

    /**
     * Asserts that an element contains a specific text
     * @param {string} selector 
     * @param {string} text 
     */
    shouldContainText(selector, text) {
        cy.get(selector).should('contain.text', text);
    }

    /**
     * Asserts that an element is visible
     * @param {string} selector 
     */
    isVisible(selector) {
        cy.get(selector).should('be.visible');
    }

    /**
     * Asserts that an element is hidden
     * @param {string} selector 
     */
    isHidden(selector) {
        cy.get(selector).should('not.be.visible');
    }

    /**
     * Asserts that an element exists in DOM
     * @param {string} selector 
     */
    shouldExist(selector) {
        cy.get(selector).should('exist');
    }

    /**
     * Asserts that an element does not exist in DOM
     * @param {string} selector 
     */
    shouldNotExist(selector) {
        cy.get(selector).should('not.exist');
    }

    /**
     * Verifies current URL contains expected string
     * @param {string} expectedUrl 
     */
    verifyUrl(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }

    /**
     * Verifies page title matches expected string
     * @param {string} expectedTitle 
     */
    verifyPageTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle);
    }
}

export default BasePage;

