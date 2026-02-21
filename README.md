# Cypress Automation Framework

A modern test automation framework built with Cypress, following the Page Object Model (POM) design pattern. This project is configured for automated end-to-end testing of the [Sauce Demo](https://www.saucedemo.com/) website.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (installed automatically with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd CypressAutomationFramework
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## 🏗️ Project Structure

```text
CypressAutomationFramework/
├── cypress/
│   ├── e2e/               # Test specifications
│   │   └── SauceDemo/     # E2E tests for Sauce Demo
│   ├── fixtures/          # Static test data (e.g., testData.json)
│   ├── support/           # Custom commands and global hooks
│   │   └── pages/         # Page Object Model (POM) classes
│   └── screenshots/       # Screenshots for failed tests (generated)
│   └── videos/            # Video recordings of test runs (generated)
├── .github/workflows/     # CI/CD pipeline (GitHub Actions)
├── cypress.config.js      # Cypress configuration
├── package.json           # Scripts and dependencies
└── .gitignore             # File exclusion rules
```

## 🧪 Running Tests

### Local Execution
To run tests via the command line (headless mode by default):
```bash
npm run cypress:test
```

Alternatively, to open the Cypress Test Runner:
```bash
npx cypress open
```

## 🤖 CI/CD Integration

This project uses **GitHub Actions** for continuous integration. The workflow is defined in `.github/workflows/cypress-ci.yml`.

### Features:
- **Automatic Triggers**: Runs on every push or pull request to `main` or `master`.
- **Environment Variables**: Uses GitHub Secrets for sensitive data (e.g., `VALID_USERNAME`, `VALID_PASSWORD`).
- **Artifacts**: 
  - **Screenshots**: Automatically uploaded if a test fails.
  - **Videos**: Always uploaded for every CI run.
  - **Test Reports**: Mochawesome HTML reports are uploaded for every CI run.

### Artifacts Access:
After a CI run finishes, navigate to the **Actions** tab in GitHub, select the latest run, and scroll down to the **Artifacts** section to download screenshots or videos.

## 🔒 Security & Data
- `package-lock.json` is tracked to ensure consistent builds across environments.
- Sensitive data should be managed via environment variables or GitHub Secrets.
- Local `testData.json` is ignored by git to prevent accidental commitment of sensitive information.

## 📊 Reporting
The project uses `cypress-mochawesome-reporter` for detailed test execution reports.
