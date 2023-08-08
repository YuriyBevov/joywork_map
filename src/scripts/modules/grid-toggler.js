const toggler = document.querySelector('.lw-grid-toggler');
const grid = document.querySelector('.grid');
if(toggler) {
  toggler.addEventListener('click', () => grid.classList.toggle('grid--fullwidth'));
}
