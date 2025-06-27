




document.addEventListener('DOMContentLoaded', () => {



    document.getElementById("cooperation__form").addEventListener('submit', function (e) {
        e.preventDefault();

        const cooperation__form__name = document.getElementById('cooperation__form__name');
        const cooperation__form__phone = document.getElementById('cooperation__form__phone');
        const cooperation__form__name_value = cooperation__form__name.value.trim();
        const cooperation__form__phone_value = cooperation__form__phone.value.trim();


        if (cooperation__form__name_value.length < 2 || cooperation__form__name_value.length > 50) {
            alert('Ошибка: имя должно содержать от 2 до 50 символов');
            cooperation__form__name.focus();
            return;
        }


        const phoneRegex = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
        if (!phoneRegex.test(cooperation__form__phone_value)) {
            alert('Ошибка: введите телефон в формате +7 (XXX) XXX-XX-XX');
            cooperation__form__phone.focus();
            return;
        }

        alert('Форма успешно отправлена!');
        this.submit();
    });

    cooperation__form__phone.addEventListener('input', function (e) {
        if (cooperation__form__phone.value == "") {
            cooperation__form__phone.value = "+7"
        }
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2] ? '+7' : '+7 (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    });

    cooperation__form__phone.addEventListener('keydown', function (event) {
        if ((event.key === 'Backspace' || event.keyCode === 8) && cooperation__form__phone.value == "+7") {
            cooperation__form__phone.value = ""
        }
    });



})