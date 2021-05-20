/** NAV */
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
/** MODALS */
const modalBackground = document.querySelector(".modal-background");
const modalBackThisProject = document.querySelector(".modal-back-this-project");
const modalCompleted = document.querySelector(".modal-completed");
const modalCheckboxs = document.querySelectorAll(
  ".modal-back-this-project-item__checkbox"
);
/** BUTTONS */
const btnBack = document.querySelector(".hero__button--back");
const btnModalCompleted = document.querySelector(".modal-completed__button");
const btnModalBack = document.querySelectorAll(
  ".modal-back-this-project-item__button"
);
const btnModalClose = document.querySelector(
  ".modal-back-this-project__icon-close"
);

/**
 * MODAL NAV
 */
navToggle.addEventListener("click", toggleNav);

function toggleNav() {
  document.body.classList.toggle("modal-active--nav");
  navMenu.classList.toggle("nav__menu--active");
  navToggle.classList.toggle("nav__toggle--active");
  modalBackground.classList.toggle("modal-background--nav-active");
}
navMenu.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.remove("modal-active--nav");
  navMenu.classList.remove("nav__menu--active");
  navToggle.classList.remove("nav__toggle--active");
  modalBackground.classList.remove("modal-background--nav-active");
  window.location.href = e.target.href;
});

modalBackground.addEventListener("click", (e) => {
  if (navMenu.classList.contains("nav__menu--active")) {
    toggleNav();
  }
});

/**
 * MODAL BACK THIS PROJECT
 */
modalBackThisProject.addEventListener("click", function (e) {
  if (this === e.target) {
    if (this.classList.contains("modal-back-this-project--active")) {
      toggleModalBack();
    }
  }
});
btnModalClose.addEventListener("click", toggleModalBack);
btnBack.addEventListener("click", toggleModalBack);
function toggleModalBack() {
  document.body.classList.toggle("modal-active");
  modalBackground.classList.toggle("modal-background--active");
  modalBackThisProject.classList.toggle("modal-back-this-project--active");
}
modalCheckboxs.forEach((item) => {
  item.addEventListener("click", function (e) {
    const className = "modal-back-this-project-item--active";
    const articleItem = e.target.parentElement.parentElement;
    if (!articleItem.classList.contains(className)) {
      modalCheckboxs.forEach((element) => {
        element.parentElement.parentElement.classList.remove(className);
      });
    }
    articleItem.classList.toggle(className);
  });
});
btnModalBack.forEach((item) => {
  item.addEventListener("click", () => {
    toggleModalCompleted();
    toggleModalBack();
  });
});

/**
 * MODAL COMPLETED
 */
modalCompleted.addEventListener("click", function (e) {
  if (this === e.target) {
    if (this.classList.contains("modal-completed--active")) {
      toggleModalCompleted();
    }
  }
});
btnModalCompleted.addEventListener("click", toggleModalCompleted);
function toggleModalCompleted() {
  document.body.classList.toggle("modal-active");
  modalBackground.classList.toggle("modal-background--active");
  modalCompleted.classList.toggle("modal-completed--active");
}
