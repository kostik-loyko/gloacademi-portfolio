const accordeon = document.querySelector('.feature-list');
const accordeonBtns = accordeon.querySelectorAll('.feature__link');

accordeonBtns.forEach(accordeonBtn => {
   accordeonBtn.addEventListener('click', () => {
      accordeonBtns.forEach(Btn => {
         Btn.classList.remove('feature__link_active');
         Btn.nextElementSibling.classList.add('hidden');
      })
      accordeonBtn.classList.toggle('feature__link_active');
      accordeonBtn.nextElementSibling.classList.toggle('hidden');
   })
})