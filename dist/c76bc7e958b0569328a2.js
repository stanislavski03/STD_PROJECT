document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById("course_program__form");
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var course_program__form__name = document.getElementById('course_program__form__name');
      var course_program__form__phone = document.getElementById('course_program__form__phone');
      var course_program__form__name_value = course_program__form__name.value.trim();
      var course_program__form__phone_value = course_program__form__phone.value.trim();
      if (course_program__form__name_value.length < 2 || course_program__form__name_value.length > 50) {
        alert('Ошибка: имя должно содержать от 2 до 50 символов');
        course_program__form__name.focus();
        return;
      }
      var phoneRegex = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
      if (!phoneRegex.test(course_program__form__phone_value)) {
        alert('Ошибка: введите телефон в формате +7 (XXX) XXX-XX-XX');
        course_program__form__phone.focus();
        return;
      }
      alert('Форма успешно отправлена!');
      this.submit();
    });
    course_program__form__phone.addEventListener('input', function (e) {
      if (course_program__form__phone.value == "") {
        course_program__form__phone.value = "+7";
      }
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      e.target.value = !x[2] ? '+7' : '+7 (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    });
    course_program__form__phone.addEventListener('keydown', function (event) {
      if ((event.key === 'Backspace' || event.keyCode === 8) && course_program__form__phone.value == "+7") {
        course_program__form__phone.value = "";
      }
    });
  }
});