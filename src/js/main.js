import '../scss/main.scss';
import Swiper from 'swiper';
import 'swiper/css';
import './salon_map';
import './salon_swiper';
import './header';
import './design-studio_review';





document.addEventListener('DOMContentLoaded', () => {


//КНОПКА ПРОКРУТКИ

  document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавная прокрутка
    });
  });

  // Показываем/скрываем кнопку при прокрутке
  window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
    backToTopButton.style.bottom = '90px';
  }
  else {
    backToTopButton.style.bottom = '20px';
  }
  });

  // Инициализация - скрываем кнопку при загрузке, если мы уже вверху
  document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    backToTopButton.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
  });



  




})








