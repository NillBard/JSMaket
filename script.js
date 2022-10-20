window.addEventListener("DOMContentLoaded", () => {
  function createElement(tag, className = "", content = "") {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    element.innerHTML += content;
    return element;
  }

  function createImage(src, className = "") {
    const img = new Image();
    img.src = src;
    if (className) {
      img.classList.add(className);
    }
    return img;
  }

  function head() {
    const header = createElement("section", "header");
    const container = createElement("div", "container");
    const navigation = createElement("div", "navigation");
    const logo = createImage("./assets/img/Logo.png", "logo");
    const v1 = createImage("./assets/img/Vector.png", "vector1");
    const v2 = createImage("./assets/img/Vector1.png", "vector2");
    const rec = createImage("./assets/img/rec.png", "rec");
    const clock = createImage("./assets/img/Alarm_clock.png", "clock");

    const burger = createElement("div", "burger");
    for (let i = 0; i < 3; i++) {
      burger.append(document.createElement("div"));
    }

    navigation.append(logo, burger);
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

    headerContent.append(h1, p, button, clock);
    container.append(headerContent, v1, v2, rec);
    header.append(container);
    return header;
  }

  function fact() {
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
    return facts;
  }

  function feature() {
    const features = createElement("section", "featuresBlock");
    const container = createElement("div", "featuresContainer");
    const span = createElement("span", "", "features");
    const h2 = createElement("h2", "", `Some excellent `);
    h2.append(span, " for you");
    const rocket = createImage("./assets/img/3d_rocket.png", "rocket");
    const p = createElement(
      "p",
      "featuresContent",
      "An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula "
    );
    const cardBlock = createElement("div", "cardBlock");
    [
      {
        title: "Preset List of Task",
        img: "./assets/img/Task Lists.png",
        content: "Make bill payments easily using the wallet app",
      },
      {
        title: "Reminder of Task",
        img: "./assets/img/bell 1.png",
        content: "Make bill payments easily using the wallet app",
      },
      {
        title: "Complecation Report",
        img: "./assets/img/Group.png",
        content: "Make bill payments easily using the wallet app",
      },
    ].forEach((elemnt, index) => {
      const item = createElement("div", "cardItem");
      const img = createImage(elemnt.img);
      const imgWrapper = createElement("div", "imgWrapper");
      imgWrapper.append(img);
      const h4 = createElement("h4", "", `${elemnt.title}`);
      const p = createElement("p", "", `${elemnt.content}`);
      const cardItemText = createElement("div", "cardItemText");
      cardItemText.append(h4, p);
      item.append(imgWrapper, cardItemText);
      item.classList.add(`item${index + 1}`);
      cardBlock.append(item);
    });

    container.append(h2, p, cardBlock, rocket);

    features.append(container);
    return features;
  }

  function analytic() {
    const analytics = createElement("section", "analytics");
    const bigPicture = createImage(
      "./assets/img/Big_picture.png",
      "bigPicture"
    );
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
        img: "./assets/img/Icon.png",
        content:
          "Time Tracking is never been easier. Just let the stopwatch run",
      },
      {
        title: "Customizable dashboard",
        img: "./assets/img/Content.png",
        content:
          "Time Tracking is never been easier. Just let the stopwatch run",
      },
      {
        title: "Statistics retroactively",
        img: "./assets/img/Icon (1).png",
        content:
          "Time Tracking is never been easier. Just let the stopwatch run",
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
    return analytics;
  }

  function tracker() {
    const tracker = createElement("section", "tracker");
    const container = createElement("div", "trackerContainer");
    const trackerInfo = createElement("div", "trackerInfo");
    const chart = createImage("./assets/img/chart.png", "chart");
    const h2 = createElement("h2", "", "How our ");
    const span = createElement("span", "", "Tracker ");
    h2.append(span, "work for you");

    const infoList = createElement("div", "infoList");
    [
      {
        img: "./assets/img/green-icon.png",
        title: "Time Tracking",
        content:
          "Time Tracking is never been easier. Just let the stopwatch run",
      },
      {
        img: "./assets/img/pink-icon.png",
        title: "Expenses",
        content:
          "Time Tracking is never been easier. Just let the stopwatch run",
      },
      {
        img: "./assets/img/blue-icon.png",
        title: "Budget controlling",
        content:
          "Time Tracking is never been easier. Just let the stopwatch run",
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
    ["./assets/img/Kit 1.png", "./assets/img/Kit 3.png"].forEach((element) => {
      const img = createImage(element);
      imageList.append(img);
    });

    container.append(trackerInfo, imageList, chart);
    tracker.append(container);
    return tracker;
  }

  function price() {
    const price = createElement("section", "price");
    const container = createElement("div", "priceContainer");
    const h2 = createElement("h2", "", "Flexible work, Simple Price");
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
    return price;
  }

  function partners() {
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
      "./assets/img/Brand2.png",
      "./assets/img/Brand1.png",
      "./assets/img/Brand3.png",
      "./assets/img/Brand5.png",
    ].forEach((element, index) => {
      const item = createElement("div", `partnersItem`);
      item.classList.add(`brand${index + 1}`);
      const img = createImage(element);
      item.append(img);
      partnersList.append(item);
    });

    container.append(partnersInfo, partnersList);
    partners.append(container);
    return partners;
  }

  function comment() {
    const comment = createElement("section", "comment");
    const container = createElement("div", "commentContainer");
    const commentHeader = createElement(
      "h2",
      "commentHeader",
      "What our client says"
    );
    const like = createImage("./assets/img/like.png", "like");
    const chat = createImage("./assets/img/chat.png", "chat");
    const line = createImage("./assets/img/comment-line.png", "commentLine");

    const commentContent = createElement("div", "commentContent");
    const avatar = createElement("div", "avatar");
    const commentContentText = createElement(
      "p",
      "commentContentText",
      "Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding"
    );
    const personInfo = createElement("div", "personInfo");
    const personName = createElement("h4", "personName", "Mila McSabbu");
    const personPost = createElement("p", "personPost", "Designer");
    const commentSlider = createElement("div", "commentSlider");
    for (let index = 0; index < 4; index++) {
      commentSlider.append(document.createElement("div"));
    }
    personInfo.append(personName, personPost, commentSlider);
    commentContent.append(avatar, commentContentText, personInfo);

    container.append(commentHeader, commentContent, like, chat, line);
    comment.append(container);
    return comment;
  }

  function store() {
    const store = createElement("section", "store");
    const storeContainer = createElement("div", "storeContainer");
    const storeHeader = createElement(
      "h2",
      "storeHeader",
      "Get it now for free"
    );
    const hand = createImage("./assets/img/right-hand.png", "hand");
    const storeContent = createElement(
      "p",
      "storeContent",
      "We are offering free debit cards once you sing up and order a card. we wont chargeyou for our debit card."
    );
    const storeButton = createElement("div", "storeButton");
    [
      {
        img: "./assets/img/apple__content.png",
        type: "apple",
      },
      {
        img: "./assets/img/android__content.png",
        type: "google",
      },
    ].forEach((element) => {
      const item = createElement("button", `${element.type}`);
      const img = createImage(element.img);
      item.append(img);
      storeButton.append(item);
    });

    storeContainer.append(storeHeader, storeContent, storeButton, hand);

    store.append(storeContainer);
    return store;
  }

  function footer() {
    const footer = createElement("footer");
    const footerContainer = createElement("div", "footerContainer");
    const logo = createImage("./assets/img/Logo.png", "footerLogo");
    const nav = createElement("nav");
    const social = createElement("div", "social");
    const navList = createElement("ul", "navList");
    const privacy = createElement("ul", "privacy");
    [
      "./assets/img/Instagram.png",
      "./assets/img/Linkedin.png",
      "./assets/img/Facebook.png",
      "./assets/img/red-twitter.png",
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
    return footer;
  }

  const body = document.querySelector("body");
  const app = createElement("div");
  app.append(
    head(),
    fact(),
    feature(),
    analytic(),
    tracker(),
    price(),
    partners(),
    comment(),
    store(),
    footer()
  );
  body.append(app);
});
