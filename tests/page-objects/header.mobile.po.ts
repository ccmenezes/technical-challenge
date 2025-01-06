import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '../shared/base.po';

export class HeaderMobile extends BasePage {
  readonly menuButton: Locator;
  readonly menuList: Locator;
  readonly categoryMenu: Locator;
  readonly categoryList: Locator;

  constructor(page: Page) {
    super(page);
    this.menuButton = page.locator('button.navbar-toggler');
    this.menuList = page.getByRole('listitem');
    this.categoryMenu = page.getByTestId('nav-categories');
    this.categoryList = page.locator('ul.dropdown-menu.show li');
  }
}
