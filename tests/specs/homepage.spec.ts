import { test, expect } from '@playwright/test';
// Page objects
import { Homepage } from '../page-objects/homepage.po';
import { ProductDetailPage } from '../page-objects/product-detail.po';
// Helpers
import {
  PRODUCT_DESCRIPTION,
  PRODUCT_PRICE,
  PRODUCT_NAME,
  OUT_OF_STOCK_PRODUCT,
  OUT_OF_STOCK_PRICE,
  OUT_OF_STOCK_DESCRIPTION,
} from '../fixtures/product-detail.fixture';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
  });

  test('Verify that the product information is displayed', async ({ page }) => {
    //TODO
    //Improve test case
    //Jira ticket - AUTOMATION-2026
    const homepage = new Homepage(page);
    const NAME_PRICE_PRODUCT_CARD = 'Combination Pliers $14.15';
    //Verify product name and price
    await expect(homepage.productsContainer.nth(0)).toHaveText(NAME_PRICE_PRODUCT_CARD);
    //Verify product image
    await expect(homepage.productsContainer.nth(0).locator(homepage.imageProductCardAttribute)).toHaveAttribute('src');
  });

  test('Should sucessfully navigate between tabs', async ({ page }) => {
    const homepage = new Homepage(page);
    const classAtiveTab = 'page-item active';
    await homepage.tabOne.click();
    await expect(homepage.paginationList.nth(1)).toHaveClass(classAtiveTab);
    await homepage.tabTwo.click();
    await expect(homepage.paginationList.nth(2)).toHaveClass(classAtiveTab);
    await homepage.tabThree.click();
    await expect(homepage.paginationList.nth(3)).toHaveClass(classAtiveTab);
    await homepage.tabFour.click();
    await expect(homepage.paginationList.nth(4)).toHaveClass(classAtiveTab);
    await homepage.tabFive.click();
    await expect(homepage.paginationList.nth(5)).toHaveClass(classAtiveTab);
  });
});

test.describe('Redirect to product detail page', () => {
  test.beforeEach(async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
  });

  test('Verify click the product redirects to the product page detail', async ({ page }) => {
    const homepage = new Homepage(page);
    const productDetailPage = new ProductDetailPage(page);

    await expect(homepage.productsContainer).toHaveCount(9);

    await homepage.productsContainer.nth(0).click();
    //Verify quantity input
    await expect(productDetailPage.inputProductQuantity).toBeEditable();
    //Verify add to cart button enable
    await expect(productDetailPage.addProductButton).toBeEnabled();
    //Verify add to favourites button enable
    await expect(productDetailPage.addToFavouriteButton).toBeEnabled();
    //Verify product detail page
    expect(await productDetailPage.getProductName()).toContain(PRODUCT_NAME);
    //Verify product price
    expect(await productDetailPage.getUnitPrice()).toContain(PRODUCT_PRICE);
    //Verify product description
    expect(await productDetailPage.getDescription()).toContain(PRODUCT_DESCRIPTION);
  });

  test('Verify click the product out of stock does not allow to add in the cart', async ({ page }) => {
    const homepage = new Homepage(page);
    const productDetailPage = new ProductDetailPage(page);

    await expect(homepage.productsContainer).toHaveCount(9);
    await homepage.productsContainer.nth(3).click();
    //Verify quantity input
    await expect(productDetailPage.disableinputProductQuantity).toBeVisible();
    //Verify add to cart button enable
    await expect(productDetailPage.addProductButton).toBeDisabled();
    //Verify add to favourites button enable
    await expect(productDetailPage.addToFavouriteButton).toBeEnabled();
    //Verify product detail page
    expect(await productDetailPage.getProductName()).toContain(OUT_OF_STOCK_PRODUCT);
    //Verify product price
    expect(await productDetailPage.getUnitPrice()).toContain(OUT_OF_STOCK_PRICE);
    //Verify product description
    expect(await productDetailPage.getDescription()).toContain(OUT_OF_STOCK_DESCRIPTION);
  });
});
