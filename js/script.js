const formBlock = document.querySelector('.form__block');
const formBtn = formBlock.querySelector('.form__btn');
const header = document.querySelector('.header');
const headerBurger = document.querySelector(".header__burger");
const headerLogo = header.querySelector(".logo");
const headerNav = header.querySelector(".header__nav-block");

function clickButton() {
  headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("header__burger_status_active");
    headerLogo.classList.toggle("logo_status_none");
    headerNav.classList.toggle("header__nav_status_none");
  })
}
clickButton();

formBlock.addEventListener("submit", (evt) => {
  evt.preventDefault();
  formBtn.textContent = 'Готово!';
  formBlock.reset();
});

const gallerySwiper = new Swiper('.gallery__block', {
  cssMode: true,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: '.gallery__nav-arrow_turn_right',
    prevEl: '.gallery__nav-arrow_turn_left',
  },
});

const mediaSwiper = new Swiper(".media__swiper-block", {

  cssMode: true,
  speed: 1000,
  loop: true,
  pagination: {
    el: ".media__nav-block",
    bulletClass: "media__bullet",
    bulletActiveClass: 'media__bullet_active',
    clickable: true,
  },
});