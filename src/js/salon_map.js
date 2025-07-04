import markIcon1 from '../img/furniture_salon_chain/salon_map/mark1.svg';
import markIcon2 from '../img/furniture_salon_chain/salon_map/mark2.svg';
import markIcon3 from '../img/furniture_salon_chain/salon_map/mark3.svg';

document.addEventListener('DOMContentLoaded', async function () {

  await loadYandexMaps();

  ymaps.ready(init);

  function init() {
    const mapContainer = document.getElementById('furniture_salon_chain_map');
    if (!mapContainer) return; // Проверяем существование контейнера
    // Проверяем, не существует ли уже карта в этом контейнере
      // Создаем карту в контейнере "map"
      let initialZoom = 12; // Значение по умолчанию для десктопов
      let standart_w = 50;
      let standart_h = 50;

      if (window.innerWidth <= 1366 && window.innerWidth > 768) { // Для laptop (1366px - типичное разрешение)
        initialZoom = 11; // Уменьшаем зум на 1
        standart_w = 30;
        standart_h = 30;
      } else if (window.innerWidth <= 768) { // Для мобильных
        initialZoom = 10; // Ещё меньше зум
        standart_w = 20;
        standart_h = 20;
      }

      // Создаем карту с динамическим zoom
      const myMap = new ymaps.Map("furniture_salon_chain_map", {
        center: [45.063395, 38.982277],
        zoom: initialZoom // Используем вычисленный zoom
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
          iconImageSize: [standart_w, standart_h],
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
          iconImageSize: [standart_w, standart_h],
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
          iconImageSize: [standart_w, standart_h],
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

  function loadYandexMaps() {
    return new Promise((resolve) => {
      if (window.ymaps) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=4480516c-969c-447e-a472-63b4a52db97c&lang=ru_RU';
      script.onload = resolve;
      document.head.appendChild(script);
    });
  }
});