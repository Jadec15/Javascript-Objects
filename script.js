/**
 * Practice: Building objects
 */

import Wallet from "./Wallet.js";
import Card from "./Card.js";

const targetGiftCard = new Card("Target Giftcard", "25");

const sephoraGiftCard = new Card("Sephora Giftcard", "50");

const debitCard = new Card("Debit Card", "3000");

const myWallet = new Wallet(
  "My Wallet",
  "Gray",
  8,
  { targetGiftCard, sephoraGiftCard, debitCard },
  15,
  false
);

console.log("myWallet: ", myWallet);
