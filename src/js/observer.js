document.addEventListener('DOMContentLoaded', () => {
    // Находим все элементы с классом .fade-in
    const fadeElements = document.querySelectorAll('.fade-in');

    // Настройки Intersection Observer
    const observerOptions = {
        threshold: 0.5, // Срабатывает, когда 50% элемента видно
    };

    // Создаем Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Добавляем класс для анимации
                observer.unobserve(entry.target); // Отключаем наблюдение после появления
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми элементами
    fadeElements.forEach(element => {
        observer.observe(element);
    });


    const fadeElementsXleft = document.querySelectorAll('.fade-in-x-left');

    // Настройки Intersection Observer
    const observerOptionsXleft = {
        threshold: 0.5, // Срабатывает, когда 50% элемента видно
    };

    // Создаем Observer
    const observerXleft = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Добавляем класс для анимации
                observerXleft.unobserve(entry.target); // Отключаем наблюдение после появления
            }
        });
    }, observerOptionsXleft);

    // Наблюдаем за всеми элементами
    fadeElementsXleft.forEach(element => {
        observerXleft.observe(element);
    });

        const fadeElementsXright = document.querySelectorAll('.fade-in-x-right');

    // Настройки Intersection Observer
    const observerOptionsXright = {
        threshold: 0.5, // Срабатывает, когда 50% элемента видно
    };

    // Создаем Observer
    const observerXright = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Добавляем класс для анимации
                observerXright.unobserve(entry.target); // Отключаем наблюдение после появления
            }
        });
    }, observerOptionsXright);

    // Наблюдаем за всеми элементами
    fadeElementsXright.forEach(element => {
        observerXright.observe(element);
    });
});