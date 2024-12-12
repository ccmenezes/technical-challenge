import { BasePage } from './base.po';
import { type Locator, type Page } from '@playwright/test';

export class Homepage extends BasePage {
  readonly paginationList: Locator;
  //Product container
  readonly productsContainer: Locator;
  //Pagination tabs
  readonly tabOne: Locator;
  readonly tabTwo: Locator;
  readonly tabThree: Locator;
  readonly tabFour: Locator;
  readonly tabFive: Locator;
  readonly tabSix: Locator;
  readonly tabSeven: Locator;

  constructor(page: Page) {
    super(page);
    this.tabOne = page.getByLabel('Page-1');
    this.tabTwo = page.getByLabel('Page-2');
    this.tabThree = page.getByLabel('Page-3');
    this.tabFour = page.getByLabel('Page-4');
    this.tabFive = page.getByLabel('Page-5');
    this.paginationList = page.locator('.pagination > li');
    this.productsContainer = page.locator('div > .container > .card');
  }
}
