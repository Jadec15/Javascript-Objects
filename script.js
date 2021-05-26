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
  "May 20, 2021 15:00:00 EST",
  "./assets/everyday.svg"
);

console.log("myWallet: ", myWallet);
console.log("Age of wallet: ", myWallet.walletAge(), "days");

const content = `
<main>
  <article class="wallet" id="everyday">
    <figure class="wallet__image">
      <img src=${myWallet.image} alt="" />
    </figure>
    <h1  class="wallet__name">${myWallet.name}</h1>
    <ul class="wallet__features">
     <li class="wallet__color">Color : ${myWallet.color}</li>
     <li class="wallet__length">Length: ${myWallet.length}</li>
     <li class="wallet__pockets">Number of Pockets: ${myWallet.pocketNumber}</li>
     <li class="wallet__zippers">Zipper Open?: ${myWallet.zipperOpen}</li>
     <li class="wallet__aquired">Date Aquired: ${myWallet.dateAquired}</li>
    </ul>
  </article
</main>
`;

document.body.innerHTML = content;
