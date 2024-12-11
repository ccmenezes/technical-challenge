import { test, expect } from '@playwright/test';
import { PRICE_DESC, PRICE_ASC, NAME_ASC, NAME_DESC } from '../fixtures/homepage';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
});

test.describe('Sorting', () => {
  test('Should sorting products by name', async ({ page }) => {
    const PRODUCTS_CONTAINER = page.locator('[data-test="sorting_completed"] > .card');
    const NUMBER_OF_CARDS = 9;

    // Sort by name A - Z
    await page.locator('[data-test="sort"]').selectOption('name,asc');
    await page.locator('[data-test="search-submit"]').click();
    // Count the total number of rows
    await expect(PRODUCTS_CONTAINER).toHaveCount(NUMBER_OF_CARDS);
    // Verifify the sort asc by name
    for (let index = 0; index < NAME_ASC.length; index++) {
      await expect(PRODUCTS_CONTAINER.nth(index)).toHaveText(NAME_ASC[index]);
    }

    // Sort by name Z - A
    await page.locator('[data-test="sort"]').selectOption('name,desc');
    await page.locator('[data-test="search-submit"]').click();
    // Count the total number of rows
    await expect(PRODUCTS_CONTAINER).toHaveCount(NUMBER_OF_CARDS);
    // Verifify the sort desc by name
    for (let index = 0; index < NAME_DESC.length; index++) {
      await expect(PRODUCTS_CONTAINER.nth(index)).toHaveText(NAME_DESC[index]);
    }
  });

  test('Should sorting products by price', async ({ page }) => {
    const SORT_SELECT = '[data-test="sort"]';
    const SUBMIT_BUTTON = '[data-test="search-submit"]';
    const PRODUCTS_CONTAINER = page.locator('[data-test="sorting_completed"] > .card');
    const NUMBER_OF_CARDS = 9;

    // Sort by price high to low
    await page.locator(SORT_SELECT).selectOption('price,desc');
    await page.locator(SUBMIT_BUTTON).click();
    // Count the total number of rows
    await expect(PRODUCTS_CONTAINER).toHaveCount(NUMBER_OF_CARDS);
    // Verifify the sort desc by price
    for (let index = 0; index < PRICE_DESC.length; index++) {
      await expect(PRODUCTS_CONTAINER.nth(index)).toHaveText(PRICE_DESC[index]);
    }

    // Sort by price low to high
    await page.locator(SORT_SELECT).selectOption('price,asc');
    await page.locator(SUBMIT_BUTTON).click();
    // Count the total number of rows
    await expect(PRODUCTS_CONTAINER).toHaveCount(NUMBER_OF_CARDS);
    // Verifify the sort asc by price
    for (let index = 0; index < PRICE_ASC.length; index++) {
      await expect(PRODUCTS_CONTAINER.nth(index)).toHaveText(PRICE_ASC[index]);
    }
  });
});
