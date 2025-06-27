const markIcon1 = require('@img/furniture_salon_chain/salon_map/mark1.svg');
const markIcon2 = require('@img/furniture_salon_chain/salon_map/mark2.svg');
const markIcon3 = require('@img/furniture_salon_chain/salon_map/mark3.svg');


document.addEventListener('DOMContentLoaded', function () {
  ymaps.ready(init);

  function init() {
    // Проверяем, не существует ли уже карта в этом контейнере
    if (!document.getElementById('furniture_salon_chain_map')._yandexMap) {
      // Создаем карту в контейнере "map"
      const myMap = new ymaps.Map("furniture_salon_chain_map", {
        center: [45.063395, 38.982277], // Координаты центра
        zoom: 12 // Масштаб
      });

      // Галерея
      const myPlacemark1 = new ymaps.Placemark(
        [45.039905, 38.974292], // Координаты метки
        {
          hintContent: '', // Всплывающая подсказка
          balloonContent: 'Галерея Краснодар' // Балун при клике
        },
        {
          iconLayout: 'default#image',
          iconImageHref: markIcon1,
          iconImageSize: [50, 50],
          iconImageOffset: [-15, -42]
        }
      );

      // Красная площадь
      const myPlacemark2 = new ymaps.Placemark(
        [45.101642, 38.985276], // Координаты метки
        {
          hintContent: '', // Всплывающая подсказка
          balloonContent: 'Красная площадь' // Балун при клике
        },
        {
          iconLayout: 'default#image',
          iconImageHref: markIcon2,
          iconImageSize: [50, 50],
          iconImageOffset: [-15, -42]
        }
      );

      // СБС
      const myPlacemark3 = new ymaps.Placemark(
        [45.034555, 39.045706], // Координаты метки
        {
          hintContent: '', // Всплывающая подсказка
          balloonContent: 'СБС МегаМолл' // Балун при клике
        },
        {
          iconLayout: 'default#image',
          iconImageHref: markIcon3,
          iconImageSize: [50, 50],
          iconImageOffset: [-15, -42]
        }
      );

      // Добавляем метки на карту
      myMap.geoObjects.add(myPlacemark1);
      myMap.geoObjects.add(myPlacemark2);
      myMap.geoObjects.add(myPlacemark3);

      if (window.innerWidth < 768) {
        myMap.controls.remove('searchControl');
      }
    }
  }
});