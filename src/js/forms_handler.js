document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Fancybox один раз для всех форм
    Fancybox.bind("[data-fancybox]", {
        closeButton: false,
        dragToClose: false,
        mainClass: "custom-fancybox"
    });

    // Общий обработчик для всех кнопок закрытия
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__button')) {
            Fancybox.close();
        }
    });

    // Функция для инициализации каждой формы
    function initForm(form) {
        if (!form) return;

        // Создаем уникальные элементы для ошибок этой формы
        const errorContainer = document.createElement('div');
        errorContainer.className = 'form-errors';
        form.prepend(errorContainer);

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Очищаем предыдущие ошибки
            errorContainer.innerHTML = '';

            const nameField = form.querySelector('input[type="text"]');
            const phoneField = form.querySelector('input[type="tel"]');
            const nameValue = nameField?.value.trim();
            const phoneValue = phoneField?.value.trim();

            // Валидация имени
            if (!nameValue || nameValue.length < 2 || nameValue.length > 50) {
                showError('Имя должно содержать от 2 до 50 символов', nameField, errorContainer);
                return;
            }

            // Валидация телефона
            const phoneRegex = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
            if (!phoneValue || !phoneRegex.test(phoneValue)) {
                showError('Введите телефон в формате +7 (XXX) XXX-XX-XX', phoneField, errorContainer);
                return;
            }

            try {
                // Показываем loader
                Fancybox.show([{ 
                    src: "#loadingModal", 
                    type: "inline",
                    dragToClose: false
                }]);

                // Имитация отправки (замените на реальный fetch)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Закрываем loader и показываем успех
                Fancybox.close();
                Fancybox.show([{ 
                    src: "#successModal", 
                    type: "inline",
                    on: {
                        closing: () => form.reset()
                    }
                }]);

            } catch (error) {
                Fancybox.close();
                showError('Произошла ошибка при отправке формы', null, errorContainer);
                console.error('Ошибка:', error);
            }
        });

        // Обработчик маски телефона
        const phoneField = form.querySelector('input[type="tel"]');
        if (phoneField) {
            phoneField.addEventListener('input', function(e) {
                if (phoneField.value === "") phoneField.value = "+7";
                let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                e.target.value = !x[2] ? '+7' : '+7 (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
            });

            phoneField.addEventListener('keydown', function(event) {
                if ((event.key === 'Backspace' || event.keyCode === 8) && phoneField.value === "+7") {
                    phoneField.value = "";
                }
            });
        }
    }

    // Функция показа ошибки (теперь привязана к конкретной форме)
    function showError(message, focusField = null, errorContainer) {
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        errorElement.textContent = message;
        errorContainer.appendChild(errorElement);
        
        // Показываем модальное окно только для серьезных ошибок
        if (!errorContainer.closest('.form-errors')) {
            Fancybox.show([{ 
                src: "#errorModal", 
                type: "inline" 
            }]);
        }

        if (focusField) {
            focusField.focus();
            focusField.classList.add('input-error');
            focusField.addEventListener('input', () => {
                focusField.classList.remove('input-error');
            }, { once: true });
        }
    }

    // Инициализируем каждую форму отдельно
    const forms = [
        document.getElementById("cooperation__form"),
        document.getElementById("application__form"),
        document.getElementById("course_program__form")
    ];

    forms.forEach(form => initForm(form));
});