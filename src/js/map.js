// import '../scss/main.scss';
// import Swiper from 'swiper';
// import 'swiper/css';


// document.addEventListener('DOMContentLoaded', function () {
// ymaps.ready(init);

//   function init() {
//     // Создаем карту в контейнере "map"
//     const myMap = new ymaps.Map("map", {
//       center: [45.032101, 38.921536], // Координаты центра
//       zoom: 16 // Масштаб

//     });

//     // Добавляем метку
//     const myPlacemark = new ymaps.Placemark(
//       [45.032101, 38.921536], // Координаты метки
//       {
//         hintContent: 'Наш офис', // Всплывающая подсказка
//         balloonContent: 'Приходите к нам в гости!' // Балун при клике
//       },
//       {
//         iconLayout: 'default#image',
//         iconImageHref: '../img/geography/pin.svg', // Иконка метки
//         iconImageSize: [50, 50],
//         iconImageOffset: [-15, -42]
//       }
//     );

//     // Добавляем метку на карту
//     myMap.geoObjects.add(myPlacemark);

//     if (window.innerWidth < 768) {
//       myMap.controls.remove('searchControl');
//     }


//   }

//   });