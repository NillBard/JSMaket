import { createElement, createImage } from "../create.js";

const partners = createElement("section", "partners");
const container = createElement("div", "partnersContainer");
const partnersList = createElement("div", "partnersList");
const partnersInfo = createElement("div", "partnersInfo");
const h2 = createElement("h2", "", "See Our ");
const span = createElement("span", "", "trusted ");
h2.append(span, "partners");
const p = createElement(
  "p",
  "",
  "Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict altera legimu. Me vita de lege ndos expet end is ad. Ex mei omita aliu mi ando"
);
const button = createElement("button", "", "Get Started");

partnersInfo.append(h2, p, button);

[
  "../assets/img/Brand2.png",
  "../assets/img/Brand1.png",
  "../assets/img/Brand3.png",
  "../assets/img/Brand5.png",
].forEach((element, index) => {
  const item = createElement("div", `partnersItem`);
  item.classList.add(`brand${index + 1}`);
  const img = createImage(element);
  item.append(img);
  partnersList.append(item);
});

container.append(partnersInfo, partnersList);
partners.append(container);

export default partners;
