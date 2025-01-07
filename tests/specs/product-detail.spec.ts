import { test, expect } from '@playwright/test';
// Page objects
import { Homepage } from '../page-objects/homepage.po';
import { ProductDetailPage } from '../page-objects/product-detail.po';
// Helpers
import { PRODUCT_DETAIL, OUT_OF_STOCK } from '../data/product-detail.json';

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
    const PRODUCT_TITLE_REGEX = new RegExp(PRODUCT_DETAIL.PRODUCT_TITLE);
    await expect(page).toHaveTitle(PRODUCT_TITLE_REGEX);
    //Verify product name
    expect(await productDetailPage.getProductName()).toContain(PRODUCT_DETAIL.PRODUCT_NAME);
    //Verify product category
    await expect(productDetailPage.categoryBadge).toHaveText(PRODUCT_DETAIL.PRODUCT_CATEGORY);
    //Verify product brand
    await expect(productDetailPage.brandBadge).toHaveText(PRODUCT_DETAIL.PRODUCT_BRAND);
    //Verify product price
    expect(await productDetailPage.getUnitPrice()).toContain(PRODUCT_DETAIL.PRODUCT_PRICE);
    //Verify product description
    expect(await productDetailPage.getDescription()).toContain(PRODUCT_DETAIL.PRODUCT_DESCRIPTION);
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
    const PRODUCT_TITLE_REGEX = new RegExp(OUT_OF_STOCK.PRODUCT_TITLE);
    await expect(page).toHaveTitle(PRODUCT_TITLE_REGEX);
    //Verify product name
    expect(await productDetailPage.getProductName()).toContain(OUT_OF_STOCK.PRODUCT_NAME);
    //Verify product category
    await expect(productDetailPage.categoryBadge).toHaveText(OUT_OF_STOCK.PRODUCT_CATEGORY);
    //Verify product brand
    await expect(productDetailPage.brandBadge).toHaveText(OUT_OF_STOCK.PRODUCT_BRAND);
    //Verify product price
    expect(await productDetailPage.getUnitPrice()).toContain(OUT_OF_STOCK.PRODUCT_PRICE);
    //Verify product description
    expect(await productDetailPage.getDescription()).toContain(OUT_OF_STOCK.PRODUCT_DESCRIPTION);

    //Verify quantity input
    await expect(productDetailPage.inputProductQuantity).toBeDisabled();
    //Verify out of stock label
    expect(await productDetailPage.getOutOfStockLabel()).toContain(OUT_OF_STOCK.PRODUCT_LABEL);
    //Verify add to cart button enable
    await expect(productDetailPage.addProductButton).toBeDisabled();
    //Verify add to favourites button enable
    await expect(productDetailPage.addToFavouriteButton).toBeEnabled();
  });
});
