import { type Locator, type Page, expect } from '@playwright/test';

export class Homepage {
  readonly page: Page;
  readonly paginationList: Locator;
  readonly tabOne: Locator;
  readonly tabTwo: Locator;
  readonly tabThree: Locator;
  readonly tabFour: Locator;
  readonly tabFive: Locator;
  readonly tabSix: Locator;
  readonly tabSeven: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tabOne = page.getByLabel('Page-1');
    this.tabTwo = page.getByLabel('Page-2');
    this.tabThree = page.getByLabel('Page-3');
    this.tabFour = page.getByLabel('Page-4');
    this.tabFive = page.getByLabel('Page-5');
    this.paginationList = page.locator('.pagination > li');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  }
}
