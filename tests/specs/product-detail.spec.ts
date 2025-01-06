import { test, expect } from '@playwright/test';
// Page objects
import { Homepage } from '../page-objects/homepage.po';
import { ProductDetailPage } from '../page-objects/product-detail.po';
// Helpers
import {
  PRODUCT_DESCRIPTION,
  PRODUCT_PRICE,
  PRODUCT_NAME,
  PRODUCT_CATEGORY,
  PRODUCT_BRAND,
  OUT_OF_STOCK_PRODUCT,
  OUT_OF_STOCK_PRICE,
  OUT_OF_STOCK_DESCRIPTION,
  OUT_OF_STOCK_CATEGORY,
  OUT_OF_STOCK_BRAND,
  TITLE_PRODUCT,
  OUT_OF_STOCK_TITLE,
  OUT_OF_STOCK_LABEL,
} from '../data/product-detail';

test.describe('Homepage - Redirect to product detail page', () => {
  test.beforeEach(async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
  });

  test('Verify click the product redirects to the product page detail', async ({ page }) => {
    const homepage = new Homepage(page);
    const productDetailPage = new ProductDetailPage(page);

    await page.reload({ waitUntil: 'networkidle' });
    await expect(homepage.productsContainer).toHaveCount(9, {
      timeout: 10000,
    });
    //Click at the firt container product
    await homepage.productsContainer.nth(0).click();
    await page.reload({ waitUntil: 'networkidle' });

    //Verify redirects to detail page
    await expect(page).toHaveTitle(TITLE_PRODUCT);
    //Verify product name
    expect(await productDetailPage.getProductName()).toContain(PRODUCT_NAME);
    //Verify product category
    await expect(productDetailPage.categoryBadge).toHaveText(PRODUCT_CATEGORY);
    //Verify product brand
    await expect(productDetailPage.brandBadge).toHaveText(PRODUCT_BRAND);
    //Verify product price
    expect(await productDetailPage.getUnitPrice()).toContain(PRODUCT_PRICE);
    //Verify product description
    expect(await productDetailPage.getDescription()).toContain(PRODUCT_DESCRIPTION);
    //Verify quantity input
    await expect(productDetailPage.inputProductQuantity).toBeEditable();
    //Verify add to cart button enable
    await expect(productDetailPage.addProductButton).toBeEnabled();
    //Verify add to favourites button enable
    await expect(productDetailPage.addToFavouriteButton).toBeEnabled();
  });

  test('Verify click the product out of stock does not allow to add in the cart', async ({ page }) => {
    const homepage = new Homepage(page);
    const productDetailPage = new ProductDetailPage(page);

    await page.reload({ waitUntil: 'networkidle' });
    await expect(homepage.productsContainer).toHaveCount(9, {
      timeout: 10000,
    });
    //Click at out of stock product
    await homepage.productsContainer.nth(3).click();
    await page.reload({ waitUntil: 'networkidle' });

    //Verify redirects to detail page
    await expect(page).toHaveTitle(OUT_OF_STOCK_TITLE);
    //Verify product name
    expect(await productDetailPage.getProductName()).toContain(OUT_OF_STOCK_PRODUCT);
    //Verify product category
    await expect(productDetailPage.categoryBadge).toHaveText(OUT_OF_STOCK_CATEGORY);
    //Verify product brand
    await expect(productDetailPage.brandBadge).toHaveText(OUT_OF_STOCK_BRAND);
    //Verify product price
    expect(await productDetailPage.getUnitPrice()).toContain(OUT_OF_STOCK_PRICE);
    //Verify product description
    expect(await productDetailPage.getDescription()).toContain(OUT_OF_STOCK_DESCRIPTION);

    //Verify quantity input
    await expect(productDetailPage.inputProductQuantity).toBeDisabled();
    //Verify out of stock label
    expect(await productDetailPage.getOutOfStockLabel()).toContain(OUT_OF_STOCK_LABEL);
    //Verify add to cart button enable
    await expect(productDetailPage.addProductButton).toBeDisabled();
    //Verify add to favourites button enable
    await expect(productDetailPage.addToFavouriteButton).toBeEnabled();
  });
});
