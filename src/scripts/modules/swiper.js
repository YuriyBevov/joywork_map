import Swiper, { Autoplay, Thumbs, Zoom, Navigation} from 'swiper';
Swiper.use([Autoplay, Thumbs, Zoom, Navigation]);

const slider = document.querySelector('.swiper-container');

if(slider) {
    let swiper = new Swiper(".apartment-slider-thumbs", {
      slidesPerView: 'auto',

      spaceBetween: 6,
    });

    let swiperThumbs = new Swiper(".apartment-slider", {
      spaceBetween: 7,
      slidesPerView: 1,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.apartment-slider-button-next',
        prevEl: '.apartment-slider-button-prev',
      },

      thumbs: {
        swiper: swiper,
      },
    });
}

const mainSliders = document.querySelectorAll('.main-slider');

if(mainSliders) {
  mainSliders.forEach(slider => {
    new Swiper(slider, {
      slidesPerView: 1,

      spaceBetween: 15,

      navigation: {
        nextEl: '.main-slider-button-next',
        prevEl: '.main-slider-button-prev',
      },
    });
  });
}
