const tabButtons = document.querySelectorAll('.design-list__item');
const descriptions = document.querySelectorAll('.design__descr');
const images = document.querySelectorAll('.design-images');
const imagesBlock = document.querySelectorAll('.design-block__img');
const titles = document.querySelectorAll('.design__title');
const titlePage = document.querySelector('title');

const changeContent = (array, value) => {
   array.forEach((item) => {
      const dataField = item.dataset.tabsField;
      if (value === dataField) {
         item.classList.remove('hidden');
      } else {
         item.classList.add('hidden');
      }
   })
}

tabButtons.forEach((tabButton, index) => {
   tabButton.addEventListener('click', (event) => {

      titles.forEach((title, indexTitle) => {
         if (indexTitle === index) {
            title.classList.remove('hidden');
            titlePage.textContent = title.textContent;
         } else {
            title.classList.add('hidden');
         }
      })

      const dataHandler = tabButton.dataset.tabsHandler;

      changeContent(descriptions, dataHandler);
      changeContent(images, dataHandler);
      changeContent(imagesBlock, dataHandler);

      tabButtons.forEach((btn) => {
         if (btn === event.target) {
            btn.classList.add('design-list__item_active');
         } else {
            btn.classList.remove('design-list__item_active');
         }
      })

   })
})

