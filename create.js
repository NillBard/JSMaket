export function createElement(tag, className = "", content = "") {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  element.innerHTML += content;
  return element;
}

export function createImage(src, className = "") {
  const img = new Image();
  img.src = src;
  if (className) {
    img.classList.add(className);
  }
  return img;
}
