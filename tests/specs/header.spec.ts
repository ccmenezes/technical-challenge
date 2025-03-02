import { test, expect } from '@playwright/test';
import { Header } from '../page-objects/header.po';
import { CATEGORY_PAGES, GATEGORIES_ARRAY } from '../data/header.json';

test.describe('Header - Top menu', () => {
  let topMenu: Header;

  test.beforeEach(async ({ page }) => {
    topMenu = new Header(page);
    await topMenu.goto();
  });

  test('Should successfully redirect to the correct page by menu', async ({ page }) => {
    topMenu = new Header(page);

    for (let index = 0; index < GATEGORIES_ARRAY.length; index++) {
      await topMenu.selectCategoryOption(GATEGORIES_ARRAY[index]);
      let regexCategoryPath = new RegExp(CATEGORY_PAGES[index]);
      await expect(page).toHaveURL(regexCategoryPath);
    }
  });
});
