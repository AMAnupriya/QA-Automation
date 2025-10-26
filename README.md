# QA-Automation - Playwright Automation Framework
End-to-end test automation framework using Playwright and TypeScript for TUI Process.

# Folder Structure
- **.github/** – GitHub Actions for CI/CD
- **fixtures/** – Custom Playwright test fixtures
- **pages/** – POM structure for UI tests
- **testData/** – JSON-based test data
- **tests/** – Actual test specs
- **utils/** – holds the common actions and the constants & locator(ID,CLASS,XPATH,TEXT)

# Setup Instructions

# Clone the repository
git clone https://github.com/AMAnupriya/QA-Automation.git

# Navigate to project repo
cd QA-Automation

# Open in VSCode
install VSCode Editor

# Install dependencies
npm install

# Run Playwright tests
npx playwright test

# Key Feature and Validation
- **.** – Automated test scripts holiday booking journey.
- **.** – Fetched the test data from json
- **.** – Written the dynamic locators based on the test data
- **.** – written the reusable methods (eg: adult & child selection will be based on the test data given in json)
- **.** – Validated the error messages when mandatory fields are left empty or invalid data
- **.** – Used palywright locators and assertions (used visible and tohavetext)
- **.** – Used loggers util class to capture the info in console
- **.** – Used default Playwright report for result
- **.** – Used 1 worker, if need parallel execution and worker need to be changed from playwright.

# Tech Stack

- **.** – Playwright - Framework
- **.** – TypeScript - Scripting language
- **.** – Node.js - Runtime for executing tests
- **.** – VS Code - IDE
- **.** – GitHub Actions - CI/CD automation(disabled for now)

# Possible Enhancement if needed:
- **.** – cucumber (npm install --save-dev @cucumber/cucumber) can be integrated with Playwright
- **.** – Cucumber enables Behaviour-Driven Development (BDD), allowing test scenarios to be written in a human-readable Gherkin syntax
- **.** – cucumber.json - is used to define feature file paths, step definition locations, and test execution options as browser settings
- **.** – Report Portal can be implemented for reporting and Execution Details