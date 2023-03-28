const breakpoint = window.matchMedia('(min-width:768px)');

function swiperCheck() {
  if (breakpoint.matches) {
    if (mySwiper !== undefined) {
      mySwiper.destroy(true, true);
      return;
    }
  } else if (!breakpoint.matches) {
    return createSwiper();
  }
}

let mySwiper;

function createSwiper() {
  mySwiper = new Swiper('.swiper-container', {
    touchRatio: 1,
    slidesPerView: 'auto',
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    spaceBetween: 16,
    keyboardControl: true,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: {
      invert: true,
      sensitivity: 1,
    },
  });
}

breakpoint.addEventListener('change', swiperCheck);

swiperCheck();

const button = document.querySelector('.swiper__footer-button');
const buttonCollection = document.querySelectorAll('.visually-hidden');
const buttonSpan = button.querySelector('.footer-text');

button.addEventListener('click', function () {
  buttonCollection.forEach((elem) => {
    elem.classList.toggle('add');
  });
  buttonCheck();
});

function buttonCheck() {
  if (buttonSpan.textContent === 'Показать все') {
    buttonSpan.textContent = 'Скрыть';
    buttonSpan.classList.toggle('footer-text');
    buttonSpan.classList.toggle('footer-text-add');
  } else if (buttonSpan.textContent == 'Скрыть') {
    buttonSpan.textContent = 'Показать все';
    buttonSpan.classList.toggle('footer-text-add');
    buttonSpan.classList.toggle('footer-text');
  }
}


