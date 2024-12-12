import { test, expect } from '@playwright/test';
// Page objects
import { LoginPage } from '../page-objects/login.po';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
  });

  test('Should login with user valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(process.env.USER_EMAIL, process.env.PASSWORD);
    await expect(page).toHaveURL(/account/);
  });

  test('Should throw an error message for invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(process.env.INVALID_EMAIL, process.env.INVALID_PASSWORD);
    expect(await login.getLoginErrorMessage()).toContain('Invalid email or password');
  });
});
