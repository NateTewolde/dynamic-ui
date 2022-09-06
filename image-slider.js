formatArrows();

function formatArrows() {
  let rightArrow = document.querySelector(".right-arrow");
  rightArrow.addEventListener("click", moveToRight);

  let leftArrow = document.querySelector(".left-arrow");
  leftArrow.addEventListener("click", moveToLeft);
}

function moveToRight() {
  currentImage = document.querySelector(".current-img");
  currentImgId = currentImage.getAttribute("data-img-id").slice(-1);
  if (currentImgId === "4") {
    currentImgId = "-1";
  }
  currentImage.classList.remove("current-img");
  nextImage = document.querySelector(
    "[data-img-id=image" + (+currentImgId + 1) + "]"
  );
  nextImage.classList.add("current-img");

  currentDot = document.querySelector("[data-dot-id=dot" + +currentImgId + "]");
  currentDot.classList.remove("current-dot");
  nextDot = document.querySelector(
    "[data-dot-id=dot" + (+currentImgId + 1) + "]"
  );
  nextDot.classList.add("current-dot");
}

function moveToLeft() {
  currentImage = document.querySelector(".current-img");
  currentImgId = currentImage.getAttribute("data-img-id").slice(-1);
  if (currentImgId === "0") {
    currentImgId = "5";
  }
  currentImage.classList.remove("current-img");
  nextImage = document.querySelector(
    "[data-img-id=image" + (+currentImgId - 1) + "]"
  );
  nextImage.classList.add("current-img");

  currentDot = document.querySelector("[data-dot-id=dot" + +currentImgId + "]");
  currentDot.classList.remove("current-dot");
  nextDot = document.querySelector(
    "[data-dot-id=dot" + (+currentImgId - 1) + "]"
  );
  nextDot.classList.add("current-dot");
}

// const element = document.querySelector(".current-img");

// const attrs = element.getAttributeNames().reduce((acc, name) => {
//   return { ...acc, [name]: element.getAttribute(name) };
// }, {});

// // 👇️ {id: 'blue', 'data-id': 'example', class: 'box'}
// console.log(attrs);
