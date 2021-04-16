document.querySelector(".nav__toggle").addEventListener("click", function (e) {
    document.querySelector(".nav__menu").classList.toggle("nav__menu--active")
    document.querySelector(".nav__toggle").classList.toggle("nav__toggle--active")
});