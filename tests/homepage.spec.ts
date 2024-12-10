import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
});

test.describe('Sorting', () => {
  test('Should sorting products by name', async ({ page }) => {
    const PRODUCTS_CONTAINER_BY_NAME_DESC =
      ' Wood Saw $12.18 Wood Carving Chisels $45.23 Washers $3.55 Tool Cabinet $86.71 Thor Hammer $11.14 Tape Measure 7.5m $7.23 Tape Measure 5m $12.91 Swiss Woodcarving Chisels $22.96 Super-thin Protection Gloves $38.45';

    await page.locator('[data-test="sort"]').selectOption('name,desc');
    await page.locator('[data-test="search-submit"]').click();
    await expect(page.locator('[data-test="sorting_completed"]')).toHaveText(PRODUCTS_CONTAINER_BY_NAME_DESC);
  });

  test('Should sorting products by price', async ({ page }) => {
    const PRODUCTS_CONTAINER_BY_PRICE_DESC =
      ' Drawer Tool Cabinet $89.55 Tool Cabinet $86.71 Circular Saw $80.19 Belt Sander $73.59 Cordless Drill 24V $66.54 Leather toolbelt $61.16 Sheet Sander $58.48 Bolt Cutters $48.41 Cordless Drill 12V $46.50';

    const PRODUCTS_CONTAINER_BY_PRICE_ASC =
      ' Washers $3.55 Flat-Head Wood Screws $3.95 M4 Nuts $4.65 Phillips Screwdriver $4.92 Nuts and bolts $5.55 Screws $6.25 Tape Measure 7.5m $7.23 Cross-head screws $7.99 Slip Joint Pliers $9.17';

    await page.locator('[data-test="sort"]').selectOption('price,desc');
    await page.locator('[data-test="search-submit"]').click();
    await expect(page.locator('[data-test="sorting_completed"]')).toHaveText(PRODUCTS_CONTAINER_BY_PRICE_DESC);

    await page.locator('[data-test="sort"]').selectOption('price,asc');
    await page.locator('[data-test="search-submit"]').click();
    await expect(page.locator('[data-test="sorting_completed"]')).toHaveText(PRODUCTS_CONTAINER_BY_PRICE_ASC);
  });
});
