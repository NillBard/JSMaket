import { createElement } from "../create.js";

const comment = createElement("section", "comment");
const container = createElement("div", "commentContainer");
const commentHeader = createElement(
  "h2",
  "commentHeader",
  "What our client says"
);
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

container.append(commentHeader, commentContent);
comment.append(container);
export default comment;
