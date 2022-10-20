import { createElement, createImage } from "../create.js";

const store = createElement("section", "store");
const storeContainer = createElement("div", "storeContainer");
const storeHeader = createElement("h2", "storeHeader", "Get it now for free");
const hand = createImage("../assets/img/right-hand.png", "hand");
const storeContent = createElement(
  "p",
  "storeContent",
  "We are offering free debit cards once you sing up and order a card. we wont chargeyou for our debit card."
);
const storeButton = createElement("div", "storeButton");
[
  {
    img: "../assets/img/apple__content.png",
    type: "apple",
  },
  {
    img: "../assets/img/android__content.png",
    type: "google",
  },
].forEach((element) => {
  const item = createElement("button", `${element.type}`);
  const img = createImage(element.img);
  item.append(img);
  storeButton.append(item);
});

storeContainer.append(storeHeader, storeContent, storeButton);

store.append(storeContainer, hand);
export default store;
