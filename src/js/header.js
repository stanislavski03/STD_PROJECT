document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'); 
    if (!header) return;
    
    // Обработчик скролла
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            // Не убираем scrolled класс если меню открыто
            if (!header.classList.contains('header--menu-open')) {
                header.classList.remove('header--scrolled');
            }
        }
    });
    
    // Обработчик бургер-меню
    const burger = document.querySelector('.header__burger');
    const navSection = document.querySelector('.header__nav-section');
    
    if (burger && navSection) {
        burger.addEventListener('click', function() {
            const isOpening = !this.classList.contains('header__burger--active');
            
            this.classList.toggle('header__burger--active');
            navSection.classList.toggle('header__nav-section--mobile-open');
            header.classList.toggle('header--menu-open', isOpening);
            
            // Блокируем/разблокируем скролл страницы при открытом меню
            document.body.style.overflow = isOpening ? 'hidden' : '';
            
            // Если закрываем меню и нет скролла - убираем белый фон
            if (!isOpening && window.scrollY <= 50) {
                header.classList.remove('header--scrolled');
            }
        });
    }
    
    // Закрываем меню при клике на пункт меню
    const navButtons = document.querySelectorAll('.header__nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                burger.classList.remove('header__burger--active');
                navSection.classList.remove('header__nav-section--mobile-open');
                header.classList.remove('header--menu-open');
                document.body.style.overflow = '';
                
                if (window.scrollY <= 50) {
                    header.classList.remove('header--scrolled');
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-light');
    if (!header) return;
    
    const burger = header.querySelector('.header-light__burger');
    const navSection = header.querySelector('.header-light__nav-section');
    const navButtons = header.querySelectorAll('.header-light__nav-button');
    const phoneLink = header.querySelector('.header-light__phone-link');
    const contactButton = header.querySelector('.header-light__contact-button');
    const logoImage = header.querySelector('.header-light__logo-image');
    const burgerLines = header.querySelectorAll('.header-light__burger-line');

    // Функция для обновления состояния шапки
    const updateHeaderState = () => {
        const isScrolled = window.scrollY > 50;
        const isMenuOpen = header.classList.contains('header-light--menu-open');
        
        // Приоритет: меню открыто > скролл > обычное состояние
        if (isMenuOpen || isScrolled) {
            header.style.top = '0';
            header.style.padding = '15px 0';
            header.style.backgroundColor = 'white';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            
            // Черные элементы
            [...navButtons, phoneLink, contactButton].forEach(el => {
                if (el) el.style.color = 'black';
            });
            if (contactButton) contactButton.style.borderColor = 'black';
            if (logoImage) logoImage.style.filter = 'brightness(0)';
            burgerLines.forEach(line => {
                line.style.backgroundColor = 'black';
            });
        } else {
            // Возвращаем исходное состояние
            header.style.top = '30px';
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
            
            // Белые элементы
            [...navButtons, phoneLink, contactButton].forEach(el => {
                if (el) el.style.color = 'white';
            });
            if (contactButton) contactButton.style.borderColor = 'white';
            if (logoImage) logoImage.style.filter = 'brightness(0) invert(1)';
            burgerLines.forEach(line => {
                line.style.backgroundColor = 'white';
            });
        }
    };

    // Обработчик скролла
    window.addEventListener('scroll', updateHeaderState);
    
    // Обработчик бургер-меню
    if (burger && navSection) {
        burger.addEventListener('click', function() {
            const isOpening = !this.classList.contains('header-light__burger--active');
            
            this.classList.toggle('header-light__burger--active');
            navSection.classList.toggle('header-light__nav-section--mobile-open');
            header.classList.toggle('header-light--menu-open', isOpening);
            
            document.body.style.overflow = isOpening ? 'hidden' : '';
            updateHeaderState();
            
            if (!isOpening && window.scrollY <= 50) {
                header.classList.remove('header-light--scrolled');
            }
        });
    }
    
    // Закрытие меню при клике на пункт
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                burger.classList.remove('header-light__burger--active');
                navSection.classList.remove('header-light__nav-section--mobile-open');
                header.classList.remove('header-light--menu-open');
                document.body.style.overflow = '';
                updateHeaderState();
            }
        });
    });

    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && header.classList.contains('header-light--menu-open')) {
            burger.classList.remove('header-light__burger--active');
            navSection.classList.remove('header-light__nav-section--mobile-open');
            header.classList.remove('header-light--menu-open');
            document.body.style.overflow = '';
            updateHeaderState();
        }
    });

    // Инициализация состояния
    updateHeaderState();
});