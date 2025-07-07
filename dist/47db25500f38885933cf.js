import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import '../scss/components/furniture_salon_chain/salon_swiper.scss';
document.addEventListener('DOMContentLoaded', function () {
  var swiperContainer = document.querySelector('.salon_swiper.swiper-container');
  if (!swiperContainer) return; // Выходим если контейнера нет

  var salon_swiper_prevBtn = document.querySelector('.salon_swiper-button-prev');
  var salon_swiper_nextBtn = document.querySelector('.salon_swiper-button-next');
  var salonSwiper = new Swiper('.salon_swiper.swiper-container', {
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    speed: 600,
    slidesPerView: 3,
    spaceBetween: 0,
    clipToSide: true,
    watchSlidesVisibility: true,
    loop: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: ['-110%', 0, -500],
        opacity: 0.9
      },
      next: {
        translate: ['110%', 0, -500],
        opacity: 0.9
      },
      limitProgress: 3
    },
    navigation: {
      nextEl: salon_swiper_nextBtn,
      prevEl: salon_swiper_prevBtn,
      disabledClass: 'swiper-button--disabled'
    },
    pagination: {
      el: ".salon_swiper__swiper-pagination",
      enabled: true,
      clickable: true
    },
    on: {
      click: function click(event) {
        if (this.clickedIndex !== undefined) {
          this.slideTo(this.clickedIndex);
        }
      }
    },
    breakpoints: {

      // 768: {
      //   slidesPerView: 1,
      //   centeredSlides: false
      // },
      // 1200: {
      //     slidesPerView: 2
      // },
      // 1700: {
      //     slidesPerView: 3
      // }
    }
  });
});