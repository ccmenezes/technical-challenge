import { type Locator, type Page, expect } from '@playwright/test';

export class Filter {
  readonly page: Page;
  readonly productsContainer: Locator;
  readonly sortSelect: Locator;
  readonly searchButton: Locator;
  readonly searchArea: Locator;
  readonly noProductFoundMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsContainer = page.locator('div > .container > .card'); // a generic locator, because the data id changes according to filters
    this.sortSelect = page.locator('[data-test="sort"]');
    this.searchArea = page.locator('[data-test="search-query"]');
    this.searchButton = page.locator('[data-test="search-submit"]');
    this.noProductFoundMsg = page.locator('[data-test="no-results"]');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  }

  async sortSelectOption(option: string) {
    await this.sortSelect.selectOption(option);
  }

  async informSearchTerm(product: string) {
    await this.searchArea.fill(product);
    await this.searchButton.click();
  }
}
