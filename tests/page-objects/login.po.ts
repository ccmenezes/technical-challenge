import { expect, type Page } from '@playwright/test';
import { BasePage } from '../shared/base.po';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('/auth/login');
    await expect(this.page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  }

  async login(email: string, password: string) {
    await this.page.getByTestId('email').fill(email);
    await this.page.getByTestId('password').fill(password);
    await this.page.getByTestId('login-submit').click();
  }

  async getLoginErrorMessage() {
    return await this.page.getByTestId('login-error').textContent();
  }
}
