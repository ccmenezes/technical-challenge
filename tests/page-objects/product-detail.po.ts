import { expect, Locator, type Page } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly addProductButton: Locator;
  readonly addToFavouriteButton: Locator;
  readonly inputProductQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addProductButton = page.locator('[data-test="add-to-cart"]');
    this.addToFavouriteButton = page.locator('[data-test="add-to-favorites"]');
    this.inputProductQuantity = page.locator('[data-test="quantity"]');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  }

  async getProductName() {
    return await this.page.locator('[data-test="product-name"]').textContent();
  }

  async getUnitPrice() {
    return await this.page.locator('[data-test="unit-price"]').textContent();
  }

  async getDescription() {
    return await this.page.locator('[data-test="product-description"]').textContent();
  }
}
