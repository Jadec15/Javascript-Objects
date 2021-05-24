/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const giftCard = {
  name: "Target Giftcard",
  originalAmount: "25",
  amountLeft: "2.50",
};

const libraryCard = {
  name: "Library Card",
  numBooks: 2,
  numHolds: 5,
  overdueBooks: 0,
  fees: 0,
};

const license = {
  name: "Driver's License",
  isExpired: false,
};

const wallet = {
  name: "My Wallet",
  color: "Gray",
  length: 8,
  contents: { giftCard, libraryCard, license },
  pocketNumber: 15,
  zipperOpen: false,
  unzipWallet: function (zipperStatus) {
    this.zipperOpen = zipperStatus;
  },
};
