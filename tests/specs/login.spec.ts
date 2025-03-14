import { LoginPage } from './../page-objects/login.po';
import { test, expect } from '@playwright/test';
import { ACCOUNT_PATH, INCORRECT_CREDENTIALS_MSG } from '../data/login.json';
import { USER_CUSTOMER_2, RANDOM } from '../data/credentials.json';

test.describe('Login Page', () => {
  let login: LoginPage;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goto();
  });

  test('Should login with user valid credentials', async ({ page }) => {
    login = new LoginPage(page);
    await login.doLogin(USER_CUSTOMER_2.USERNAME, USER_CUSTOMER_2.PASSWORD);
    await expect(page).toHaveURL(ACCOUNT_PATH);
    //TODO
    //Move to account page, this locator doesn't belong to the login page
    await expect(page.getByTestId('nav-menu')).toHaveText('Jack Howe');
  });

  test('Should throw an error message for invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.doLogin(RANDOM.USERNAME, RANDOM.PASSWORD);
    expect(await login.getLoginErrorMessage()).toContain(INCORRECT_CREDENTIALS_MSG);
  });
});
