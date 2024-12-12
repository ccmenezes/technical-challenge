import { type Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  }
}
