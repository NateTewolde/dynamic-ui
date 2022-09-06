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
    return;
  }
  currentImage.classList.remove("current-img");
  nextImage = document.querySelector(
    "[data-img-id=image" + (+currentImgId + 1) + "]"
  );
  nextImage.classList.add("current-img");
}

function moveToLeft() {
  currentImage = document.querySelector(".current-img");
  currentImgId = currentImage.getAttribute("data-img-id").slice(-1);
  if (currentImgId < 1) {
    return;
  }
  currentImage.classList.remove("current-img");

  nextImage = document.querySelector(
    "[data-img-id=image" + (+currentImgId - 1) + "]"
  );
  nextImage.classList.add("current-img");
}

// const element = document.querySelector(".current-img");

// const attrs = element.getAttributeNames().reduce((acc, name) => {
//   return { ...acc, [name]: element.getAttribute(name) };
// }, {});

// // 👇️ {id: 'blue', 'data-id': 'example', class: 'box'}
// console.log(attrs);
