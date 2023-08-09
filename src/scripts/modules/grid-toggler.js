const toggler = document.querySelector('.lw-grid-toggler');
const grid = document.querySelector('.grid');

if(toggler) {
  toggler.addEventListener('click', () => {
    grid.classList.toggle('grid--fullwidth');

    grid.classList.contains('grid--fullwidth') ?
    toggler.innerText = 'Показать карту' : toggler.innerText = 'Скрыть карту';
  });
}
