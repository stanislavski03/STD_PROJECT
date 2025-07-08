import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import '../scss/components/design-studio/review.scss';

export function initReviewSwiper() {
  const slider = document.querySelector('.review__swiper');
  
  if (!slider) return;

  const swiper = new Swiper(slider, {
    grabCursor: true,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: true,

    effect: 'coverflow', // или 'creative' как в рабочем примере
coverflowEffect: {
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 2,
  slideShadows: false
},
    
    navigation: {
      nextEl: '.review__button--next',
      prevEl: '.review__button--prev',
      disabledClass: 'review__button--disabled'
    },
    
    breakpoints: {
      640: { 
        slidesPerView: 1.5,
        centeredSlides: true
      },
      768: { 
        slidesPerView: 2,
        centeredSlides: false
      },
      1024: { 
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initReviewSwiper);
