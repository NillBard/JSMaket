import { createElement, createImage } from "../create.js";

const header = createElement("section", "header");
const container = createElement("div", "container");
const navigation = createElement("div", "navigation");
const logo = createImage("./assets/img/Logo.png", "logo");

const burger = createElement("div", "burger");
for (let i = 0; i < 3; i++) {
  burger.append(document.createElement("div"));
}

navigation.append(logo);
navigation.append(burger);
container.append(navigation);

const textWithShape = createElement("span", "", "Tracking");
const h1 = createElement("h1", "", "A Collaborative Time ");
h1.append(textWithShape);
h1.append(" that You Need");
const p = createElement(
  "p",
  "",
  "An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium purus pretium ligula"
);
const button = createElement("button", "", "Start 14 Days Trial");

const headerContent = createElement("div", "headerContent");
headerContent.append(h1);
headerContent.append(p);
headerContent.append(button);

container.append(headerContent);

header.append(container);

export default header;
