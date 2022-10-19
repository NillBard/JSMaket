import { createElement } from "../create.js";
const facts = createElement("div", "facts");

const factsList = createElement("div", "factsList");

const array = [
  {
    title: "15k+",
    content: "Active user",
  },
  {
    title: "30k",
    content: "Total Download",
  },
  {
    title: "10k",
    content: "Customer",
  },
].forEach((element) => {
  const h2 = createElement("h2", "bigNum", `${element.title}`);
  const p = createElement("p", "littleNum", `${element.content}`);
  const item = createElement("div", "factsItem");
  const hr = createElement("div", "hr");
  item.append(h2);
  item.append(p);
  factsList.append(item);
  factsList.append(hr);
});

facts.append(factsList);

export default facts;
