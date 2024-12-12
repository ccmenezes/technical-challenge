# Technical Challenge
This project is a showcase using Playwright to create automation test suite for [practice software testing](https://practicesoftwaretesting.com/)

## Getting Started
### Prerequisites

Install NodeJs for Mac, Linux or Windows following the link bellow.

* [NodeJs](https://nodejs.org/en/download/package-manager)
* [Git](https://git-scm.com/downloads)

### Installing

Executing the following instruction will clone the repository.

```bash
git clone https://github.com/ccmenezes/technical-challenge.git      # copy the project
cd technical-challenge                                              # go to the folder
```

To install the project dependencies.

```bash
npm ci      # install dependencies
```
This command provide a clean installation, removing existent dependencies to avoiding conflicts.

### Running Tests

```bash
npm run test    # run playwright tests
```
Executing this command all tests under test/ folder will be performed, when the tests end the output folder have the playwright-report and test-results in a single place.

Checking the test report 
```bash
npm run test:report     # open test report
```
The genereted report will be open at the default browser.


## Documentation

* Use the Playwright for instructions on how to use Playwright.
* [EsLint](https://eslint.org/) to find and fix problems in Typescript code.
* [Prettier](https://prettier.io/docs/en/) for code formatter.
* [Husky](https://typicode.github.io/husky/), use Eslint and Prettier together to apply the existing rules to improve your code. These rules are considered to create a git commit.