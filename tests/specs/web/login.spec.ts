import { test, expect } from '@playwright/test';
// Page objects
import { LoginPage } from '../../page-objects/login.po';
// Helpers
import { ACCOUNT_PATH, INCORRECT_CREDENTIALS_MSG } from '../../fixtures/login.fixture';
import { CREDENTIALS } from '../../fixtures/credentials.fixture';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
  });

  test('Should login with user valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.doLogin(CREDENTIALS.USER_CUSTOMER_2.USERNAME, CREDENTIALS.USER_CUSTOMER_2.PASSWORD);
    await expect(page).toHaveURL(ACCOUNT_PATH);
    //TODO
    //Move to account page, this locator doesn't belong to the login page
    await expect(page.getByTestId('nav-menu')).toHaveText('Jack Howe');
  });

  test('Should throw an error message for invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.doLogin(CREDENTIALS.RANDOM.USERNAME, CREDENTIALS.RANDOM.PASSWORD);
    expect(await login.getLoginErrorMessage()).toContain(INCORRECT_CREDENTIALS_MSG);
  });
});
