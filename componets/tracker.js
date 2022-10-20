import { createElement, createImage } from "../create.js";

const tracker = createElement("section", "tracker");
const container = createElement("div", "trackerContainer");
const trackerInfo = createElement("div", "trackerInfo");

const h2 = createElement("h2", "", "How our ");
const span = createElement("span", "", "Tracker ");
h2.append(span, "work for you");

const infoList = createElement("div", "infoList");
[
  {
    img: "../assets/img/green-icon.png",
    title: "Time Tracking",
    content: "Time Tracking is never been easier. Just let the stopwatch run",
  },
  {
    img: "../assets/img/pink-icon.png",
    title: "Expenses",
    content: "Time Tracking is never been easier. Just let the stopwatch run",
  },
  {
    img: "../assets/img/blue-icon.png",
    title: "Budget controlling",
    content: "Time Tracking is never been easier. Just let the stopwatch run",
  },
].forEach((element) => {
  const item = createElement("div", "trackerItem");
  const img = createImage(`${element.img}`);
  const itemContent = createElement("div", "trackerItemContent");
  const h4 = createElement("h4", "", `${element.title}`);
  const p = createElement("p", "", `${element.content}`);
  itemContent.append(h4, p);
  item.append(img, itemContent);
  infoList.append(item);
});

trackerInfo.append(h2, infoList);

const imageList = createElement("div", "imgList");
["../assets/img/Kit 1.png", "../assets/img/Kit 3.png"].forEach((element) => {
  const img = createImage(element);
  imageList.append(img);
});

container.append(trackerInfo, imageList);
tracker.append(container);

export default tracker;
