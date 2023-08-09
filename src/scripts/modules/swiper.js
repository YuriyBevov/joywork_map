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
