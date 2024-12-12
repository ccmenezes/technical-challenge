import { expect, type Locator, type Page } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly categoryMenu: Locator;
  readonly contactmenu: Locator;
  readonly signinMenu: Locator;
  readonly categoryHandTools: Locator;
  readonly categoryPowerTools: Locator;
  readonly categoryOthers: Locator;
  readonly categorySpecialTools: Locator;
  readonly categoryRentals: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryMenu = page.locator('[data-test="nav-categories"]');
    this.contactmenu = page.locator('[data-test="nav-contact"]');
    this.signinMenu = page.locator('[data-test="nav-sign-in"]');
    this.categoryHandTools = page.locator('[data-test="nav-hand-tools"]');
    this.categoryPowerTools = page.locator('[data-test="nav-power-tools"]');
    this.categoryOthers = page.locator('[data-test="nav-other"]');
    this.categorySpecialTools = page.locator('[data-test="nav-special-tools"]');
    this.categoryRentals = page.locator('[data-test="nav-rentals"]');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  }

  async selectCategoryOption(categoryOption: string) {
    await this.categoryMenu.click();

    switch (categoryOption) {
      case 'handTools':
        await this.categoryHandTools.click();
        break;
      case 'powerTools':
        await this.categoryPowerTools.click();
        break;
      case 'others':
        await this.categoryOthers.click();
        break;
      case 'specialTools':
        await this.categorySpecialTools.click();
        break;
      case 'rentals':
        await this.categoryRentals.click();
        break;
      default:
        throw Error('Invalid category.');
    }
  }
}
