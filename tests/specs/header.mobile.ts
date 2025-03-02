import { test, expect } from '@playwright/test';
import { HeaderMobile } from '../page-objects/header.mobile.po';
import { MENU_LIST, CATEGORY_LIST, SUBMENU_COUNT, CATEGORY_COUNT } from '../data/header.mobile.json';

test.describe('HeaderMobile - Top menu', () => {
  let topMenu: HeaderMobile;

  test.beforeEach(async ({ page }) => {
    topMenu = new HeaderMobile(page);
    await topMenu.goto();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Should expand main menu subcategories', async ({ page }) => {
    topMenu = new HeaderMobile(page);
    await topMenu.menuButton.click();
    await expect(topMenu.menuList).toHaveCount(SUBMENU_COUNT);
    await expect(topMenu.menuList).toHaveText(MENU_LIST);
  });

  test('Should expand the categories menu', async ({ page }) => {
    topMenu = new HeaderMobile(page);
    await topMenu.menuButton.click();
    await topMenu.categoryMenu.click();
    await expect(topMenu.categoryList).toHaveCount(CATEGORY_COUNT);
    await expect(topMenu.categoryList).toHaveText(CATEGORY_LIST);
  });
});
