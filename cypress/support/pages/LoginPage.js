import BasePage from './BasePage';

class LoginPage extends BasePage {
  // Locators as class properties (not inside methods)
  usernameField = "#user-name";
  passwordField = "#password";
  loginButton = "#login-button";
  pageTitle = ".title";

  // Actions
  enterUsername(username) {
    this.fill(this.usernameField, username);
  }

  enterPassword(password) {
    this.fill(this.passwordField, password);
  }

  clickLogin() {
    this.click(this.loginButton);
  }

  verifyTitle(expectedTitle) {
    this.verifyText(this.pageTitle, expectedTitle);
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default LoginPage;

