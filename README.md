# TUI Booking Automation Framework

A comprehensive Playwright automation framework for testing TUI booking flow with TypeScript, following industry best practices.

## 🎯 Project Overview

This framework provides comprehensive testing capabilities for TUI booking system, featuring robust automation with modern testing practices and excellent reporting.

### Key Features
- ✅ **Complete Booking Flow Testing** - End-to-end booking process automation
- ✅ **Random Data Generation** - Realistic test data with random selections
- ✅ **Overlay Handling** - Automatic popup and banner management
- ✅ **Comprehensive Logging** - Detailed test execution tracking
- ✅ **Allure Reporting** - Beautiful test reports with screenshots
- ✅ **CI/CD Integration** - GitHub Actions workflow
- ✅ **Page Object Model** - Maintainable and scalable architecture

## 🏗️ Project Structure

```
TUI Booking/
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI/CD
├── src/
│   ├── pages/
│   │   ├── BasePage.ts           # Base page with common functionality
│   │   └── HomePage.ts           # TUI booking form page object
│   └── utils/
│       └── TestData.ts           # Test data generation utilities
├── tests/
│   ├── tui-flight-form.spec.ts   # Basic form interaction tests
│   └── tui-booking-flow.spec.ts  # Complete assignment test suite
├── allure-results/               # Allure test results (generated)
├── playwright-report/            # Playwright HTML reports (generated)
├── test-results/                 # Test artifacts (generated)
├── package.json                  # Dependencies and scripts
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** 18+ ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** ([Download here](https://git-scm.com/))

### 1. Clone the Repository
```bash
git clone <repository-url>
cd "TUI Booking"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Playwright Browsers
```bash
npx playwright install
```

### 4. Run Tests
```bash
# Run all tests
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Run specific test suite
npx playwright test tests/tui-booking-flow.spec.ts

# Run with single worker (sequential)
npx playwright test --workers=1
```

## 📊 Reporting

### Allure Reports
Generate and view beautiful Allure reports:
```bash
# Generate Allure report
npm run test:allure

# View Allure report
npm run allure:serve
```

### Playwright Reports
View HTML reports:
```bash
# View latest report
npm run test:report
```

## 🔧 Configuration

### Playwright Configuration (`playwright.config.ts`)
- **Browsers**: Chromium, Firefox, WebKit
- **Headless**: Configurable for CI/CD
- **Screenshots**: On failure
- **Videos**: On failure
- **Traces**: On first retry

### TypeScript Configuration (`tsconfig.json`)
- **Target**: ES2020
- **Strict mode**: Enabled
- **Path mapping**: Configured for clean imports


## 🚀 CI/CD Pipeline

### GitHub Actions Workflow
The project includes a complete CI/CD pipeline:

```yaml
# .github/workflows/ci.yml
- Runs on: push/PR to main/develop
- Node.js: 18.x
- Steps:
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Install Playwright browsers
  5. Run tests
  6. Generate Allure report
  7. Upload artifacts
```

### Pipeline Features
- ✅ **Automatic testing** on code changes
- ✅ **Cross-platform** support (Windows, macOS, Linux)
- ✅ **Artifact uploads** for test results
- ✅ **Allure report generation**
- ✅ **60-minute timeout** for long-running tests

## 🛠️ Development

### Adding New Tests
1. Create test file in `tests/` directory
2. Import required page objects
3. Follow existing test patterns
4. Add proper assertions and logging

### Adding New Page Objects
1. Extend `BasePage` class
2. Define locators using Playwright's recommended methods
3. Implement interaction methods
4. Add proper error handling

### Best Practices
- **Use Playwright's built-in locators** (`getByRole`, `getByText`, etc.)
- **Handle overlays and popups** gracefully
- **Add comprehensive logging** for debugging
- **Use force clicks** when necessary
- **Follow TypeScript best practices**

## 🔍 Debugging

### Debug Mode
```bash
# Run with debug mode
npx playwright test --debug

# Run specific test in debug mode
npx playwright test tests/tui-booking-flow.spec.ts --debug
```

### Screenshots and Videos
- **Screenshots**: Automatically captured on failures
- **Videos**: Recorded for failed tests
- **Traces**: Available for debugging complex issues

### Common Issues
1. **API Dropdowns Not Loading**: Expected behavior - tests simulate selections
2. **Network Timeouts**: Tests include retry logic and fallbacks
3. **Overlay Interference**: Comprehensive overlay handling implemented

## 🏆 Framework Capabilities

### ✅ Technical Features
- **TypeScript and Playwright** - Modern testing stack
- **Page Object Model (POM)** - Maintainable architecture
- **Random data selection** - Realistic test scenarios
- **Comprehensive logging** - Detailed execution tracking
- **Error handling** - Robust validation and recovery
- **Best practices** - Clean, maintainable code


## 🤝 Contributing

### Setup for New Joiners
1. **Clone repository**
2. **Install dependencies**: `npm install`
3. **Install browsers**: `npx playwright install`
4. **Run tests**: `npm test`
5. **View reports**: `npm run test:report`

### Code Standards
- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for formatting
- **Playwright best practices** for locators

## 📞 Support

For questions or issues:
1. Check the test reports for detailed error information
2. Review the comprehensive logging output
3. Use debug mode for step-by-step execution
4. Check the Allure reports for visual debugging


---

**Framework Status**: ✅ Production Ready  
**Last Updated**: November 2024  
**Maintainer**: QA Automation Team