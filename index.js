import analytics from "./componets/analytics.js";
import facts from "./componets/fact.js";
import features from "./componets/features-block.js";
import header from "./componets/header.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log(header);
  const body = document.querySelector("body");

  body.append(header, facts, features, analytics);
});
