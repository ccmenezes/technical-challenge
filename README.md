# Technical Challenge

This project is a showcase using Playwright to create automation test suite for [practice software testing](https://practicesoftwaretesting.com/)

## Getting Started

### Prerequisites

Install NodeJs for Mac, Linux or Windows following the link below.

- [NodeJs](https://nodejs.org/en/download/package-manager)
- [Git](https://git-scm.com/downloads)

### Installing

Executing the following instruction will clone the repository.

```bash
#copy the project and go to the folder
git clone https://github.com/ccmenezes/technical-challenge.git && cd technical-challenge
```

To install the project dependencies.

```bash
npm ci      # install dependencies
```

This command provide a clean installation, removing existent dependencies to avoiding conflicts.

### Running Tests

Do you have playwright globally installed in your machine?

- Yes. You can run the command below.

```bash
npm run test    # run playwright tests
```

Executing this command all tests under test/ folder will be performed, when the tests end the output folder have the playwright-report and test-results in a single place.

> For the ones who haven't playwright installed yet, after run `npm ci`, please install playwright.

```bash
npx playwright install && npx playwright install-deps
```

When the installation is finished yoy can run the command `npm run test`.

Checking the test report

```bash
npm run test:report     # open test report
```

The genereted report will be open at the default browser.

## Documentation

- Check Playwright for instructions on how to use [Playwright](https://playwright.dev/docs/next/intro).
- [EsLint](https://eslint.org/) to find and fix problems in Typescript code.
- [Prettier](https://prettier.io/docs/en/) for code formatter.
- [Husky](https://typicode.github.io/husky/), use Eslint and Prettier together to apply the existing rules to improve your code. These rules are considered to create a git commit.
