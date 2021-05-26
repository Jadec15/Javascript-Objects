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

const content = `
    <figure class="wallet__image">
      <img src=${myWallet.image} alt="" />
    </figure>
    <h1  class="wallet__name">${myWallet.name}</h1>
    <ul class="wallet__features">
     <li class="wallet__color">Color : <span>${myWallet.color}</span></li>
     <li class="wallet__length">Length: <span>${myWallet.length}</span></li>
     <li class="wallet__pockets">Number of Pockets: <span>${myWallet.pocketNumber}</span></li>
     <li class="wallet__zippers">Zipper Open?: <span>${myWallet.zipperOpen}</span></li>
     <li class="wallet__aquired">Date Aquired: <span>${myWallet.dateAquired}</span></li>
    </ul>
`;

const main = document.querySelector(".maincontent");
const newArticle = document.createElement("article");
newArticle.classList.add("wallet");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;
main.append(newArticle);

const navigator = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Wallets</a></li>
      <li><a href="#">Other</a></li>
      <li><a href="#">Contact</a></li>
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul");
navList.innerHTML = navigator;
mainNav.append(navList);

document.querySelector(".siteheader").append(mainNav);
