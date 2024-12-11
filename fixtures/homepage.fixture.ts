/* Filters */
/* Sorting */

//Test
//Should sorting products by price
export const CARDS_RETURNED_BY_PRICE = 9;
export const PRICE_DESC = [
  /.*89.55/,
  /.*86.71/,
  /.*80.19/,
  /.*73.59/,
  /.*66.54/,
  /.*61.16/,
  /.*58.48/,
  /.*48.41/,
  /.*46.50/,
];
export const PRICE_ASC = [/.*3.55/, /.*3.95/, /.*4.65/, /.*4.92/, /.*5.55/, /.*6.25/, /.*7.23/, /.*7.99/, /.*9.17/];

//Should sorting products by name
export const CARDS_RETURNED_BY_NAME = 9;
export const NAME_DESC = [
  /Wood Saw/,
  /Wood Carving Chisels/,
  /Washers/,
  /Tool Cabinet/,
  /Thor Hammer/,
  /Tape Measure 7.5m/,
  /Tape Measure 5m/,
  /Swiss Woodcarving Chisels/,
  /Super-thin/,
];

export const NAME_ASC = [
  /Adjustable Wrench/,
  /Angled Spanner/,
  /Belt Sander/,
  /Bolt Cutters/,
  /Chisels Set/,
  /Circular Saw/,
  /Claw Hammer/,
  /Claw Hammer with Fiberglass Handle/,
  /Claw Hammer with Shock Reduction Grip/,
];

/* Search */
//Test
//Should successfully search an existent product
export const EXISTENT_PRODUCT = 'drill';
export const CARDS_RETURNED_BY_SEARCH = 4;
export const RETURNED_PRODUCTS = [
  /Cordless Drill 20V/,
  /Cordless Drill 24V/,
  /Cordless Drill 18V/,
  /Cordless Drill 12V/,
];

//Should show a notification message for non-existent product
export const NON_EXISTENT_PRODUCT = 'boots';
export const NO_RESULTS_MSG = 'There are no products found.';
