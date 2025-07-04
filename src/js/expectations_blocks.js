document.addEventListener('DOMContentLoaded', function() {
  // Находим все блоки
  const blocks = document.querySelectorAll('.expectations__blocks__block');
  
  // Обрабатываем клик по каждому блоку
  blocks.forEach(block => {
    block.addEventListener('click', function() {
      // Проверяем текущие классы блока
      const isActive1 = this.classList.contains('expectations__blocks__block--active1');
      const isActive2 = this.classList.contains('expectations__blocks__block--active2');
      const isDisabled = this.classList.contains('expectations__blocks__block--disabled');
      const isNormal = this.classList.contains('expectations__blocks__block--normal');
      
      // Удаляем все возможные классы состояний
      this.classList.remove(
        'expectations__blocks__block--active1',
        'expectations__blocks__block--active2',
        'expectations__blocks__block--disabled',
        'expectations__blocks__block--normal'
      );
      
      // Применяем новые классы согласно условиям
      if (isActive1 || isActive2) {
        // Если был активный - делаем disabled
        this.classList.add('expectations__blocks__block--disabled');
      } else if (isDisabled || isNormal) {
        // Если был disabled или normal - делаем active1 или active2 случайным образом
        const randomActive = Math.random() < 0.5 ? 'active1' : 'active2';
        this.classList.add(`expectations__blocks__block--${randomActive}`);
      }
    });
  });
});