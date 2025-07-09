document.addEventListener('DOMContentLoaded', () => {
    let currentSection = 0;
    const sections = document.querySelectorAll('.wrapper');
    const container = document.querySelector('.scroll-container');
    const footer = document.querySelector('footer'); // или ваш селектор для футера

    if (!sections || !container) return;

    // Собираем все элементы для скролла (секции + футер)
    const scrollElements = [...sections];
    if (footer) scrollElements.push(footer);

    container.addEventListener('wheel', (e) => {
        e.preventDefault();

        // Определяем направление скролла
        if (e.deltaY > 0) {
            // Скролл вниз
            currentSection = Math.min(currentSection + 1, scrollElements.length - 1);
        } else {
            // Скролл вверх
            currentSection = Math.max(currentSection - 1, 0);
        }

        // Плавный скролл к текущему элементу
        scrollElements[currentSection].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Добавляем обработчик для обычного скролла после последней секции
    let allowNormalScroll = false;
    container.addEventListener('scroll', () => {
        const lastSection = sections[sections.length - 1];
        const lastSectionRect = lastSection.getBoundingClientRect();
        
        // Если последняя секция видна полностью, разрешаем обычный скролл
        if (lastSectionRect.bottom <= window.innerHeight) {
            allowNormalScroll = true;
        } else if (lastSectionRect.top >= 0) {
            allowNormalScroll = false;
        }
    });

    // Отключаем наш скролл, если разрешен обычный
    container.addEventListener('wheel', (e) => {
        if (allowNormalScroll) {
            e.stopPropagation();
        }
    }, { passive: false });
});










// document.addEventListener('DOMContentLoaded', () => {
//     const linksWrapper = document.querySelector('.links__wrapper');
//     const previewSection = document.querySelector('.preview__wrapper');
//     let isActive = false;

//     const checkScroll = () => {
//         const previewRect = previewSection.getBoundingClientRect();
//         const scrollTrigger = window.innerHeight * 0.3;

//         if (previewRect.bottom < scrollTrigger && !isActive) {
//             linksWrapper.classList.add('active');
//             isActive = true;
//         } else if (previewRect.bottom >= scrollTrigger && isActive) {
//             linksWrapper.classList.remove('active');
//             isActive = false;
//         }
//     };

//     // Запускаем проверку при скролле и ресайзе
//     window.addEventListener('scroll', checkScroll);
//     window.addEventListener('resize', checkScroll);
    
//     // Первоначальная проверка
//     checkScroll();
// });