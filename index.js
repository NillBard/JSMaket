import analytics from "./componets/analytics.js";
import comment from "./componets/comment.js";
import facts from "./componets/fact.js";
import features from "./componets/features-block.js";
import footer from "./componets/footer.js";
import header from "./componets/header.js";
import partners from "./componets/partners.js";
import price from "./componets/priceList.js";
import store from "./componets/store.js";
import tracker from "./componets/tracker.js";
import { createElement } from "./create.js";

window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const app = createElement("div");
  app.append(
    header,
    facts,
    features,
    analytics,
    tracker,
    price,
    partners,
    comment,
    store,
    footer
  );
  body.append(app);
});
