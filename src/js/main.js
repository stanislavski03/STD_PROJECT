import '../scss/main.scss';
import 'swiper/css/bundle';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
window.Fancybox = Fancybox; // Делаем глобально доступным
import './salon_map';
import './salon_swiper';
import './design-studio_review';
import './header';
import './observer'
import './scroll-container'
import './forms_handler'






document.addEventListener('DOMContentLoaded', () => {



  document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  });

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

  document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    backToTopButton.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
  });



 const preloader = document.getElementById('preloader');
            const content = document.getElementById('content');
            const progressBar = document.getElementById('progressBar');
            const images = document.querySelectorAll('img:not(.preloader__logo)'); // Исключаем лого прелоадера
            let loadedImages = 0;

            if (!content || !progressBar || !images) {
              return
            }

            if (images.length === 0) {
                progressBar.style.width = '100%';
                setTimeout(hidePreloader, 500);
                return;
            }

            function updateProgress() {
                const progress = (loadedImages / images.length) * 100;
                progressBar.style.width = `${progress}%`;
            }

            images.forEach(img => {
                if (img.complete) {
                    imageLoaded();
                } else {
                    img.addEventListener('load', imageLoaded);
                    img.addEventListener('error', imageLoaded); // На случай ошибки загрузки
                }
            });

            function imageLoaded() {
                loadedImages++;
                updateProgress();
                if (loadedImages === images.length) {
                    setTimeout(hidePreloader, 500); // Небольшая задержка для плавности
                }
            }

            function hidePreloader() {
                preloader.classList.add('hidden');
                content.style.display = 'block';
            }




})










