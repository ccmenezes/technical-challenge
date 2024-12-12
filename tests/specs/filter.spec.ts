import { test, expect } from '@playwright/test';
// Helpers
import {
  PRICE_DESC,
  PRICE_ASC,
  NAME_ASC,
  NAME_DESC,
  CARDS_RETURNED_BY_NAME,
  CARDS_RETURNED_BY_PRICE,
  EXISTENT_PRODUCT,
  CARDS_RETURNED_BY_SEARCH,
  RETURNED_PRODUCTS,
  NON_EXISTENT_PRODUCT,
  NO_RESULTS_MSG,
} from '../fixtures/filter.fixture';
// Page objects
import { Filter } from '../page-objects/filter.po';

test.describe('Filter - Sorting', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  });

  test('Should sorting products by name', async ({ page }) => {
    const filter = new Filter(page);

    // Sort by name A - Z
    filter.sortSelectOption('name,asc');
    // Count the total number of rows
    await expect(filter.productsContainer).toHaveCount(CARDS_RETURNED_BY_NAME);
    // Verifify the sort asc by name
    for (let index = 0; index < NAME_ASC.length; index++) {
      await expect(filter.productsContainer.nth(index)).toHaveText(NAME_ASC[index]);
    }

    // Sort by name Z - A
    filter.sortSelectOption('name,desc');
    // Count the total number of rows
    await expect(filter.productsContainer).toHaveCount(CARDS_RETURNED_BY_NAME);
    // Verifify the sort desc by name
    for (let index = 0; index < NAME_DESC.length; index++) {
      await expect(filter.productsContainer.nth(index)).toHaveText(NAME_DESC[index]);
    }
  });

  test('Should sorting products by price', async ({ page }) => {
    const filter = new Filter(page);

    // Sort by price high to low
    await filter.sortSelectOption('price,desc');
    // Count the total number of rows
    await expect(filter.productsContainer).toHaveCount(CARDS_RETURNED_BY_PRICE);
    // Verifify the sort desc by price
    for (let index = 0; index < PRICE_DESC.length; index++) {
      await expect(filter.productsContainer.nth(index)).toHaveText(PRICE_DESC[index]);
    }

    // Sort by price low to high
    await filter.sortSelectOption('price,asc');
    // Count the total number of rows
    await expect(filter.productsContainer).toHaveCount(CARDS_RETURNED_BY_PRICE);
    // Verifify the sort asc by price
    for (let index = 0; index < PRICE_ASC.length; index++) {
      await expect(filter.productsContainer.nth(index)).toHaveText(PRICE_ASC[index]);
    }
  });
});

test.describe('Filter - Searching', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  });

  test('Should successfully search an existent product', async ({ page }) => {
    const filter = new Filter(page);
    // Fill a product
    await filter.informSearchTerm(EXISTENT_PRODUCT);
    // Count the total number of rows
    await expect(filter.productsContainer).toHaveCount(CARDS_RETURNED_BY_SEARCH);
    // Verify the products returned
    for (let index = 0; index < RETURNED_PRODUCTS.length; index++) {
      await expect(filter.productsContainer.nth(index)).toHaveText(RETURNED_PRODUCTS[index]);
    }
  });

  test('Should show a notification message for non-existent product', async ({ page }) => {
    const filter = new Filter(page);
    // Fill a product
    await filter.informSearchTerm(NON_EXISTENT_PRODUCT);
    // Verify the notification message
    await expect(filter.noProductFoundMsg).toHaveText(NO_RESULTS_MSG);
  });
});
