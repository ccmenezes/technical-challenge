import { test, expect } from '@playwright/test';
// Page objects
import { LoginPage } from '../page-objects/login.po';
// Helpers
import { ACCOUNT_PATH, INCORRECT_CREDENTIALS_MSG } from '../fixtures/login.fixture';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
  });

  test('Should login with user valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.doLogin(`${process.env.USER_EMAIL}`, `${process.env.PASSWORD}`);
    await expect(page).toHaveURL(ACCOUNT_PATH);
    //TODO
    //Move to account page, this locator doesn't belong to the login page
    //Jira ticket - AUTOMATION-2025
    await expect(page.locator('[data-test="nav-menu"]')).toHaveText('Jack Howe');
  });

  test('Should throw an error message for invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.doLogin(`${process.env.INVALID_EMAIL}`, `${process.env.INVALID_PASSWORD}`);
    expect(await login.getLoginErrorMessage()).toContain(INCORRECT_CREDENTIALS_MSG);
  });
});
