// import header from "./componets/header.js";
import cube from "./componets/header.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("hello world");
  const body = document.querySelector("body");

  body.append(cube(3));
});
