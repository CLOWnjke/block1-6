import '../scss/style.scss'
import '../scss/style1-4.scss'
import '../scss/style1-5.scss'
import '../scss/style1-5-2.scss'
import '../scss/style1-5-3.scss'
import '../scss/style1-4-2.scss'
import '../scss/style1-4-3.scss'
import '../scss/fonts.scss'


const slider = new Swiper('.slider-1', {
    pagination: {
        el: '.pagination-1',
        clickable: true
    },
            
        slidesPerView: 1.25,

        breakpoints: {
            768: {
              enabled: false,
              slidesPerView: 1,
              speed: 800,
            },
          },
});

const secondSlider = new Swiper('.slider-2', {
    pagination: {
        el: '.pagination-2',
        clickable: true
    },
            
        slidesPerView: 1.25,

        breakpoints: {
            768: {
              enabled: false,
              slidesPerView: 1,
              speed: 800,
            },
          },
});

const thirdSlider = new Swiper('.slider-3', {
    pagination: {
        el: '.pagination-3',
        clickable: true
    },
            
        slidesPerView: 1.15,

        breakpoints: {
            768: {
              enabled: false,
              slidesPerView: 1,
              speed: 800,
            },
          },
});



let button = document.querySelector('.slider__btn--first');
let buttonSecond = document.querySelector('.slider__btn--second');
let slide = document.querySelectorAll('.disable');
let slide2 = document.querySelectorAll('.closed');
let highlight = document.querySelector('.highlight--first');
let highlight2 = document.querySelector('.highlight--second');

button.addEventListener('click', function () {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.toggle('disable');
    }
    
    button.classList.toggle('btn--active');

    if (button.classList.contains('btn--active')) {
        button.textContent = 'Скрыть';
    } else {
        button.textContent = 'Показать всё';
    }

    highlight.classList.toggle('slider__btn-highlight--active');
});


buttonSecond.addEventListener('click', function () {
    for (let i = 0; i < slide2.length; i++) {
        slide2[i].classList.toggle('closed');
    }
    
    buttonSecond.classList.toggle('btn--active');

    if (buttonSecond.classList.contains('btn--active')) {
        buttonSecond.textContent = 'Скрыть';
    } else {
        buttonSecond.textContent = 'Показать всё';
    }

    highlight2.classList.toggle('slider__btn-highlight--active');
});





let modalBtnOpen = document.querySelector('.open-btn');
let callBackBtnOpen = document.querySelector('.open-btn--call');
let feedBackBtnOpen = document.querySelector('.open-btn--chat');
let ModalCallBackBtnOpen = document.querySelector('.modal__open-btn--call');
let ModalFeedBackBtnOpen = document.querySelector('.modal__open-btn--chat');


let modalBtnClose = document.querySelector('.icon--close');
let feedBackBtnClose = document.querySelector('.icon-feedback--close');
let callBackBtnClose = document.querySelector('.icon-callback--close');


let bigModal = document.querySelector('.modal-container--big');


let modal = document.querySelector('.modal-container');
let feedBack = document.querySelector('.modal-container--feedback');
let callBack = document.querySelector('.modal-container--callback');
 

modalBtnOpen.addEventListener('click', function () {
    modal.classList.add('push');
    bigModal.classList.add('push');
});
modalBtnClose.addEventListener('click', function () {
    modal.classList.remove('push');
    bigModal.classList.remove('push');
});


callBackBtnOpen.addEventListener('click', function () {
    callBack.classList.add('callback--open');
    bigModal.classList.add('push');
});
callBackBtnClose.addEventListener('click', function () {
    callBack.classList.remove('callback--open');
    bigModal.classList.remove('push');
});
ModalCallBackBtnOpen.addEventListener('click', function () {
    callBack.classList.add('callback--open');
    bigModal.classList.add('push');
});


feedBackBtnOpen.addEventListener('click', function () {
    feedBack.classList.add('feedback--open');
    bigModal.classList.add('push');
});
feedBackBtnClose.addEventListener('click', function () {
    feedBack.classList.remove('feedback--open');
    bigModal.classList.remove('push');
});
ModalFeedBackBtnOpen.addEventListener('click', function () {
    feedBack.classList.add('feedback--open');
    bigModal.classList.add('push');
});


bigModal.addEventListener('click', function () {
    feedBack.classList.remove('feedback--open');
    callBack.classList.remove('callback--open');
    modal.classList.remove('push');
    bigModal.classList.remove('push');
});


