import { Locator, type Page } from '@playwright/test';
import { BasePage } from './base.po';

export class ProductDetailPage extends BasePage {
  readonly addProductButton: Locator;
  readonly addToFavouriteButton: Locator;
  readonly inputProductQuantity: Locator;

  constructor(page: Page) {
    super(page);
    this.addProductButton = page.locator('[data-test="add-to-cart"]');
    this.addToFavouriteButton = page.locator('[data-test="add-to-favorites"]');
    this.inputProductQuantity = page.locator('[data-test="quantity"]');
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
