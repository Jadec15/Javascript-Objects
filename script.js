/**
 * Practice: Building objects
 */

import Wallet from "./Wallet.js";
import Card from "./Card.js";

//create new Card Objects
const targetGiftCard = new Card("Target Giftcard", "25");

const sephoraGiftCard = new Card("Sephora Giftcard", "50");

const debitCard = new Card("Debit Card", "3000");

//Create new Wallet object
//{name, color, length, contents, pocketsNumber, zipperOpen, dateAquired, image}
const myWallet = new Wallet(
  "My Wallet",
  "Gray",
  8,
  //store Cards in Wallet
  { targetGiftCard, sephoraGiftCard, debitCard },
  15,
  false,
  "May 20, 2021 15:00:00 EST",
  "./assets/Wallet.png"
);

//create template literal for page content
const content = `
    <figure class="wallet__image">
      <img src=${myWallet.image} alt="" />
    </figure>
    <h1  class="wallet__name">${myWallet.name}</h1>
    <ul class="wallet__features">
     <li class="wallet__color">Color : <span>${myWallet.color}</span></li>
     <li class="wallet__length">Length: <span>${myWallet.length}</span></li>
     <li class="wallet__pockets">Number of Pockets: <span>${
       myWallet.pocketNumber
     }</span></li>
     <li class="feature wallet__zipper">Zipper Status: <span>${
       myWallet.zipperOpen ? "open" : "closed"
     }</span></li>
     <li class="wallet__aquired">Date Aquired: <span>${
       myWallet.dateAquired
     }</span></li>
     <button class= "zipper-toggle">Unzip Wallet</button>
    </ul>
`;

//append content to the main element
const main = document.querySelector(".maincontent");
const newArticle = document.createElement("article");
newArticle.classList.add("wallet");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;
main.append(newArticle);

//get button
const button = newArticle.querySelector(".zipper-toggle");
//get status
const status = newArticle.querySelector(".wallet__zipper span");

//listen for button click to change zipper status
button.addEventListener("click", function (event) {
  this.innerText === "Unzip Wallet"
    ? ((this.innerText = "Zip Wallet"), (myWallet.zipperOpen = "false"))
    : ((this.innerText = "Unzip Wallet"), (myWallet.zipperOpen = "true"));
  status.innerText === "Unzipped"
    ? (status.innerText = "Zipped")
    : (status.innerText = "Unzipped");
  console.log(myWallet.zipperOpen);
});

//create nav bar template literal
const navigator = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Wallets</a></li>
      <li><a href="#">Other</a></li>
      <li><a href="#">Contact</a></li>
`;

//append navbar to the siteheader
const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul");
navList.innerHTML = navigator;
mainNav.append(navList);
document.querySelector(".siteheader").append(mainNav);
