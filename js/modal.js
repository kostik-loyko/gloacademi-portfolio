const buttons = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalCloseBtn = document.querySelector('.modal__close');

buttons.forEach((button) => {
   button.addEventListener('click', () => {
      modal.classList.remove('hidden');
   })
})

function closeModal(elem) {
   elem.addEventListener('click', () => {
      modal.classList.add('hidden');
   })
}

closeModal(overlay);
closeModal(modalCloseBtn);