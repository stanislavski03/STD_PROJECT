import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import '../scss/components/design-studio/review.scss';

export function initReviewSwiper() {
  const slider = document.querySelector('.review__swiper');
  if (!slider) return;

  const swiper = new Swiper(slider, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    watchSlidesProgress: true,
    
    navigation: {
      nextEl: '.review__button--next',
      prevEl: '.review__button--prev',
      disabledClass: 'review__button--disabled'
    },
    
    breakpoints: {
      400: {
        slidesPerView: 1.2,
        spaceBetween: 25
      },
      576: {
        slidesPerView: 1.5,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 35
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 45
      },
      1400: {
        slidesPerView: 3.5,
        spaceBetween: 50
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 50
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initReviewSwiper);