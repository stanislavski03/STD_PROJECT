// salon_swiper.js
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function initSalonSwiper() {
  const slider = document.querySelector('.salon__swiper');
  
  // Проверяем, существует ли слайдер на странице
  if (!slider) return;

  const swiper = new Swiper(slider, {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.salon__button--next',
      prevEl: '.salon__button--prev',
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 }
    }
  });

  // Добавляем обработчики только если элементы существуют
  const products = document.querySelectorAll('.salon__product');
  if (products) {
    products.forEach(product => {
      product.addEventListener('mouseenter', () => {
        // Ваш код hover-эффекта
      });
      
      product.addEventListener('mouseleave', () => {
        // Ваш код hover-эффекта
      });
    });
  }
}

// Инициализируем слайдер при загрузке DOM
document.addEventListener('DOMContentLoaded', initSalonSwiper);