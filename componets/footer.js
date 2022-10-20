import { createElement, createImage } from "../create.js";

const footer = createElement("footer");
const footerContainer = createElement("div", "footerContainer");
const logo = createImage("../assets/img/Logo.png", "footerLogo");
const nav = createElement("nav");
const social = createElement("div", "social");
const navList = createElement("ul", "navList");
const privacy = createElement("ul", "privacy");
[
  "../assets/img/Instagram.png",
  "../assets/img/Linkedin.png",
  "../assets/img/Facebook.png",
  "../assets/img/red-twitter.png",
].forEach((element) => {
  social.append(createImage(element));
});

["Features", "Pricing", "Contact", "Demos"].forEach((element) =>
  navList.append(createElement("li", "", element))
);
[
  "Terms & condition",
  "Privacy policy",
  "All Right Reserved @ plowv.com",
].forEach((element) => privacy.append(createElement("li", "", element)));

nav.append(navList);

footerContainer.append(logo, social, nav, privacy);

footer.append(footerContainer);
export default footer;
