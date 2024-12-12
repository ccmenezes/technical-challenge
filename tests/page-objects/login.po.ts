import { expect, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/auth/login');
    await expect(this.page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  }

  async login(email: string, password: string) {
    await this.page.locator('[data-test="email"]').fill(email);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-submit"]').click();
  }

  async getLoginErrorMessage() {
    return await this.page.locator('[data-test="login-error"]').textContent();
  }
}
