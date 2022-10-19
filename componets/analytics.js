import { createElement, createImage } from "../create.js";

const analytics = createElement("section", "analytics");
const bigPicture = createImage("../assets/img/Big_picture.png", "bigPicture");
const container = createElement("div", "analyticsContainer");
const contentWrapper = createElement("div", "contentWrapper");
const h2 = createElement(
  "h2",
  "analyticsHeader",
  "Analytics & Reporting Brackdown"
);

const p = createElement(
  "p",
  "analyticsContent",
  "An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula "
);
const analyticsList = createElement("div", "analyticsList");
[
  {
    title: "Automatic event tracking",
    img: "../assets/img/Icon.png",
    content: "Time Tracking is never been easier. Just let the stopwatch run",
  },
  {
    title: "Customizable dashboard",
    img: "../assets/img/Content.png",
    content: "Time Tracking is never been easier. Just let the stopwatch run",
  },
  {
    title: "Statistics retroactively",
    img: "../assets/img/Icon (1).png",
    content: "Time Tracking is never been easier. Just let the stopwatch run",
  },
].forEach((element) => {
  const img = createImage(`${element.img}`);
  const item = createElement("div", "analyticsItem");
  const itemContent = createElement("div", "itemContent");
  const h4 = createElement("h4", "", `${element.title}`);
  const p = createElement("p", "", `${element.content}`);
  itemContent.append(h4, p);
  item.append(img, itemContent);
  analyticsList.append(item);
});

contentWrapper.append(h2, p, analyticsList);
container.append(bigPicture, contentWrapper);

analytics.append(container);

export default analytics;
