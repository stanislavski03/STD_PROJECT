import Swiper from 'swiper';
import 'swiper/css';
import '../scss/components/furniture_salon_chain/salon_swiper.scss';


document.addEventListener('DOMContentLoaded', () => {
    const salon_swiper_prevBtn = document.querySelector('.salon_swiper-button-prev');
    const salon_swiper_nextBtn = document.querySelector('.salon_swiper-button-next');


    const salonSwiper = new Swiper('.salon_swiper.swiper-container', {

        grabCursor: true,
        centeredSlides: false,
        initialSlide: 1,
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 50,
        clipToSide: true,
        watchSlidesVisibility: true,
        loop: true,


        effect: 'creative',
        creativeEffect: {
            prev: {
                translate: ['-120%', 0, -500],
                opacity: 0.5
            },
            next: {
                translate: ['120%', 0, -500],
                opacity: 0.5
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
            clickable: true,
        },


        on: {
            click(event) {
                if (this.clickedIndex !== undefined) {
                    this.slideTo(this.clickedIndex);
                }
            }
        },

        breakpoints: {

            768: {
              slidesPerView: 1,
              centeredSlides: false
            },
            1200: {
                slidesPerView: 2
            },
            1700: {
                slidesPerView: 3
            }
        }


    });


    salon_swiper_prevBtn.addEventListener('click', () => salonSwiper.slidePrev());
    salon_swiper_nextBtn.addEventListener('click', () => salonSwiper.slideNext());

    salonSwiper.on('slideChange', function () {
        const slides = document.querySelectorAll('.salon_swiper__slide');
        slides.forEach(slide => slide.classList.remove('swiper-slide-active-custom'));

        // Активным будет слайд с индексом (activeIndex + 1) % slides.length
        const activeIndex = (salonSwiper.activeIndex + 1) % salonSwiper.slides.length;
        slides[activeIndex].classList.add('swiper-slide-active-custom');
    });

    // Инициализация при загрузке
    salonSwiper.emit('slideChange');
})