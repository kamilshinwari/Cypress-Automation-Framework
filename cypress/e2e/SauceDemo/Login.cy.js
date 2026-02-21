/// <reference types="cypress" />
import LoginPage from '../../support/pages/LoginPage';
const testdata = require('../../fixtures/testData.json');

describe('Sauce demo [LOGIN]', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.goToApplication();
  });

  it('[LOGIN] user login with valid credentials', () => {
    const username = Cypress.env('VALID_USERNAME') || testdata.valid_username;
    const password = Cypress.env('VALID_PASSWORD') || testdata.valid_password;
    
    loginPage.login(username, password);
    loginPage.verifyTitle('Products');
  });
});
