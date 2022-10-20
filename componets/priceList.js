import { createElement } from "../create.js";

const price = createElement("section", "price");
const container = createElement("div", "priceContainer");
const h2 = createElement("h2", "", "Flexible work, ");
const span = createElement("span", "", "Simple Price");
h2.append(span);
const p = createElement("p", "", "Growth your business with using us");
const switchBlock = createElement("div", "switchBlock");
const switchSpan1 = createElement("span", "", "Monthly");
const switchSpan2 = createElement("span", "", "Yearly");
const switchButton = createElement("div", "switchButton", "<div></div>");
switchBlock.append(switchSpan1, switchButton, switchSpan2);

const priceList = createElement("div", "priceList");
[
  {
    title: "Free",
    content: {
      first: "1 seat",
      second: "2 project",
    },
    type: "free",
    price: {
      currency: "$",
      number: "0",
      limit: "/Forever",
    },
    button: "Start 14 Days Trial",
  },
  {
    title: "Premium",
    content: {
      first: "Unlimited Seat",
      second: "Unlimited project",
    },
    type: "premium",
    price: {
      currency: "$",
      number: "30",
      limit: "/Forever",
    },
    button: "Start 14 Days Trial",
  },
].forEach((element) => {
  const h3 = createElement("h3", "", `${element.title}`);
  const p1 = createElement("p", "", `${element.content.first}`);
  const p2 = createElement("p", "", `${element.content.second}`);
  const itemContent = createElement("div", "priceItemContent");
  const priceTextWrapper = createElement("div", "priceTextWrapper");
  priceTextWrapper.append(h3, p1, p2);
  const price = createElement("div", "priceValue");
  const span1 = createElement("span", "", `${element.price.currency}`);
  const span2 = createElement("span", "", `${element.price.limit}`);
  price.append(span1, element.price.number, span2);
  itemContent.append(priceTextWrapper, price);

  const item = createElement("div", "priceItem");
  const button = createElement("button", "", `${element.button}`);
  item.classList.add(element.type);
  item.append(itemContent, button);
  priceList.append(item);
});

container.append(h2, p, switchBlock, priceList);
price.append(container);
export default price;
