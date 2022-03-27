const burgerBtn = document.querySelector('.humburger-menu');
const burgerMenu = document.querySelector('.menu');
const burgerLinks = document.querySelectorAll('.menu-list__link');

burgerBtn.addEventListener('click', () => {
   burgerMenu.classList.toggle('menu-active');
})

burgerLinks.forEach(burgerLink => {
   burgerLink.addEventListener('click', () => {
      burgerMenu.classList.remove('menu-active');
   })
})

document.addEventListener('click', (event) => {
   if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) {
      burgerMenu.classList.remove('menu-active');
   }
})