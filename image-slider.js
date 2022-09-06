formatArrows();
// automatedSlider();
formatNavDots();
function formatArrows() {
  let rightArrow = document.querySelector(".right-arrow");
  rightArrow.addEventListener("click", moveToRight);

  let leftArrow = document.querySelector(".left-arrow");
  leftArrow.addEventListener("click", moveToLeft);
}

// function automatedSlider() {
//   let inverval_timer;

//   //Time in milliseconds [1 second = 1000 milliseconds ]
//   inverval_timer = setInterval(function () {
//     moveToRight();
//   }, 5000);
// }

function moveToRight() {
  let currentImage = document.querySelector(".current-img");
  let currentImgId = currentImage.getAttribute("data-img-id").slice(-1);
  let dotId = 0;
  if (currentImgId === "4") {
    currentImgId = "-1";
    dotId += 0;
  } else {
    dotId += +currentImgId;
  }
  currentImage.classList.remove("current-img");
  nextImage = document.querySelector(
    "[data-img-id=image" + (+currentImgId + 1) + "]"
  );
  nextImage.classList.add("current-img");

  let currentDot = document.querySelector(".current-dot");
  currentDot.classList.remove("current-dot");
  let nextDot = document.querySelector(
    "[data-dot-id=dot" + (+currentImgId + 1) + "]"
  );
  nextDot.classList.add("current-dot");
}

function moveToLeft() {
  let currentImage = document.querySelector(".current-img");
  let currentImgId = currentImage.getAttribute("data-img-id").slice(-1);
  let dotId = 0;
  if (currentImgId === "0") {
    currentImgId = "5";
    dotId += 4;
  } else {
    dotId += +currentImgId;
  }
  currentImage.classList.remove("current-img");
  let nextImage = document.querySelector(
    "[data-img-id=image" + (+currentImgId - 1) + "]"
  );
  nextImage.classList.add("current-img");

  let currentDot = document.querySelector(".current-dot");
  currentDot.classList.remove("current-dot");
  let nextDot = document.querySelector(
    "[data-dot-id=dot" + (+currentImgId - 1) + "]"
  );
  nextDot.classList.add("current-dot");
}

function formatNavDots() {
  const navDots = document.querySelectorAll("[data-dot-id]");
  navDots.forEach((navDot) => {
    navDot.addEventListener("click", () => {
      displayNavImage(navDots.length, navDot);
    });
  });
}

function displayNavImage(navDotsLength, navDotElement) {
  let navDotId = navDotElement.getAttribute("data-dot-id").slice(-1);

  for (let i = 0; i < navDotsLength + 1; i++) {
    moveToRight();
    let currentImgId = document
      .querySelector(".current-img")
      .getAttribute("data-img-id")
      .slice(-1);
    if (currentImgId === navDotId) {
      break;
    }
  }
}
