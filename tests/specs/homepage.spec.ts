import { test, expect } from '@playwright/test';
// Page objects
import { Homepage } from '../page-objects/homepage.po';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
  });

  test('Verify that the product information is displayed', async ({ page }) => {
    //TODO
    //Improve test case, create a fixture for homepage
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
