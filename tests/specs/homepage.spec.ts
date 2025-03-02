import { test, expect } from '@playwright/test';
import { Homepage } from '../page-objects/homepage.po';

test.describe('Homepage', () => {
  let homepage: Homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    await homepage.goto();
  });

  test('Verify that the product information is displayed', async ({ page }) => {
    //TODO
    //Improve test case, create a fixture for homepage
    homepage = new Homepage(page);
    const NAME_PRICE_PRODUCT_CARD = 'Combination Pliers $14.15';
    //Verify product name and price
    await expect(homepage.productsContainer.nth(0)).toHaveText(NAME_PRICE_PRODUCT_CARD);
    //Verify product image
    await expect(homepage.productsContainer.nth(0).locator(homepage.imageProductCardAttribute)).toHaveAttribute('src');
  });

  test('Should sucessfully navigate between tabs', async ({ page }) => {
    homepage = new Homepage(page);
    const tabIndex = 5;
    const classAtiveTab = 'page-item active';

    for (let index = 1; index <= tabIndex; index++) {
      await homepage.clickOnTab(tabIndex);
      await expect(homepage.paginationList.nth(tabIndex)).toHaveClass(classAtiveTab);
    }
  });
});
