formatMenuButton();
function formatMenuButton() {
  const menuBtns = document.querySelectorAll(".menu-button");
  menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", toggleMenuBtn);
  });
}

function toggleMenuBtn() {
  if (checkForMenu() === true) {
    closeMenu();
    return;
  }

  openMenu();
}

function checkForMenu() {
  const menuCheckVisible = document.querySelector(".visible");
  if (!menuCheckVisible) {
    return false;
  }
  return true;
}

function openMenu() {
  let menu = document.querySelector(".menu");
  menu.style.width = "250px";
  document.querySelector(".options").style.width = "250px";
  menu.classList.add("visible");
}

function closeMenu() {
  let menu = document.querySelector(".menu");
  menu.style.width = "0px";
  document.querySelector(".options").style.width = "0px";
  menu.classList.remove("visible");
}
