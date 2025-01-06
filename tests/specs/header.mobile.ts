import { test, expect } from '@playwright/test';
//Page objects
import { HeaderMobile } from '../page-objects/header.mobile.po';
//Helpers
import { MENU_LIST, CATEGORY_LIST, SUBMENU_COUNT, CATEGORY_COUNT } from '../fixtures/header.mobile.json';

test.describe('HeaderMobile - Top menu', () => {
  test.beforeEach(async ({ page }) => {
    const topMenu = new HeaderMobile(page);
    await topMenu.goto();
  });

  test('Should expand main menu subcategories', async ({ page }) => {
    const topMenu = new HeaderMobile(page);
    await topMenu.menuButton.click();
    for (const menuItem of await topMenu.menuList.all()) {
      await expect(menuItem).toHaveCount(SUBMENU_COUNT);
      await expect(menuItem).toHaveText(MENU_LIST);
    }
  });

  test('Should expand the categories menu', async ({ page }) => {
    const topMenu = new HeaderMobile(page);
    await topMenu.menuButton.click();
    await topMenu.categoryMenu.click();
    await expect(topMenu.categoryList).toHaveCount(CATEGORY_COUNT);
    await expect(topMenu.categoryList).toHaveText(CATEGORY_LIST);
  });
});
