import { createElement, createImage } from "../create.js";

const features = createElement("section", "featuresBlock");
const container = createElement("div", "featuresContainer");
const span = createElement("span", "", "features");
const h2 = createElement("h2", "", `Some excellent `);
h2.append(span);
h2.innerHTML += " for you";
const p = createElement(
  "p",
  "featuresContent",
  "An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula "
);

const cardBlock = createElement("div", "cardBlock");
[
  {
    title: "Preset List of Task",
    img: "../assets/img/Task Lists.png",
    content: "Make bill payments easily using the wallet app",
  },
  {
    title: "Reminder of Task",
    img: "../assets/img/bell 1.png",
    content: "Make bill payments easily using the wallet app",
  },
  {
    title: "Complecation Report",
    img: "../assets/img/Group.png",
    content: "Make bill payments easily using the wallet app",
  },
].forEach((elemnt, index) => {
  const item = createElement("div", "cardItem");
  const img = createImage(elemnt.img);
  const imgWrapper = createElement("div", "imgWrapper");
  imgWrapper.append(img);
  const h4 = createElement("h4", "", `${elemnt.title}`);
  const p = createElement("p", "", `${elemnt.content}`);
  const cardItemText = createElement("div", "cardItemText");
  cardItemText.append(h4, p);
  item.append(imgWrapper, cardItemText);
  item.classList.add(`item${index + 1}`);
  cardBlock.append(item);
});

container.append(h2, p, cardBlock);

features.append(container);

export default features;
