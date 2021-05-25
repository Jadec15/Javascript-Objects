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
  false,
  "May 20, 2021 15:00:00 EST"
);

console.log("myWallet: ", myWallet);
console.log("Age of wallet: ", myWallet.walletAge(), "days");

const content = `
<main>
  <article>
    <h1>${myWallet.name}</h1>
    <ul>
     <li>Color: ${myWallet.color}</li>
     <li>Length: ${myWallet.length}</li>
     <li>Number of Pockets: ${myWallet.pocketNumber}</li>
     <li>Zipper Open?: ${myWallet.zipperOpen}</li>
     <li>Date Aquired: ${myWallet.dateAquired}</li>
    </ul>
  </article
</main>
`;

document.body.innerHTML = content;
