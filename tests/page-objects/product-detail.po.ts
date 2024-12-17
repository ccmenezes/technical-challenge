import { Locator, type Page } from '@playwright/test';
import { BasePage } from '../shared/base.po';

export class ProductDetailPage extends BasePage {
  readonly addProductButton: Locator;
  readonly addToFavouriteButton: Locator;
  readonly inputProductQuantity: Locator;
  readonly disableinputProductQuantity: Locator;
  readonly categoryBadge: Locator;
  readonly brandBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.addProductButton = page.getByTestId('add-to-cart');
    this.addToFavouriteButton = page.getByTestId('add-to-favorites');
    this.inputProductQuantity = page.getByTestId('quantity');
    this.categoryBadge = page.getByLabel('category');
    this.brandBadge = page.getByLabel('brand');
  }

  async getProductName() {
    return await this.page.getByTestId('product-name').textContent();
  }

  async getUnitPrice() {
    return await this.page.getByTestId('unit-price').textContent();
  }

  async getDescription() {
    return await this.page.getByTestId('product-description').textContent();
  }
}
