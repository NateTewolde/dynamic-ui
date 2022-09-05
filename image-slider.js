formatArrows();

function formatArrows() {
  let rightArrow = document.querySelector(".right-arrow");
  rightArrow.addEventListener("click", moveToRight());

  let leftArrow = document.querySelector(".left-arrow");
  leftArrow.addEventListener("click", moveToLeft());
}

function moveToRight() {
  currentImage = document.querySelector(".current-img");
  currentImage.classList.remove(".current-img");
  currentImgId = currentImage.getAttribute("data-img");
  if (currentImgId > 5) {
    return;
  }
  nextImage = document.querySelector("[data-img=" + currentImgId + 1 + "]");
  nextImage.classList.add("current-img");
}

function moveToLeft() {
  currentImage = document.querySelector(".current-img");
  currentImage.classList.remove(".current-img");
  currentImgId = currentImage.getAttribute("data-img");
  if (currentImgId < 1) {
    return;
  }
  nextImage = document.querySelector("[data-img=" + currentImgId - 1 + "]");
  nextImage.classList.add("current-img");
}
