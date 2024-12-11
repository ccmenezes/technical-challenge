import { type Locator, type Page } from '@playwright/test';

export class Homepage {
  readonly page: Page;
  readonly productsContainer: Locator;
  readonly sortSelect: Locator;
  readonly searchButton: Locator;
  readonly searchArea: Locator;
  readonly noProductFoundMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsContainer = page.locator('div > .container > .card'); // a generic locator, the data id changes according filters
    this.sortSelect = page.locator('[data-test="sort"]');
    this.searchArea = page.locator('[data-test="search-query"]');
    this.searchButton = page.locator('[data-test="search-submit"]');
    this.noProductFoundMsg = page.locator('[data-test="no-results"]');
  }

  async sortSelectOption(option: string) {
    await this.sortSelect.selectOption(option);
  }

  async informSearchTerm(product: string) {
    await this.searchArea.fill(product);
    await this.searchButton.click();
  }
}
