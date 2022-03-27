const forms = document.querySelectorAll('.form');

forms.forEach(form => {
   form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      const data = {};
      formData.append('form', form.classList.value);

      formData.forEach((value, field) => {
         data[field] = value;

      })

      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then(response => {
            console.log(response);
            if (response.ok) {
               return response.json()
            } else {
               throw new Error(response.status);
            }
         })
         .then(data => {
            console.log(data);
            alert('good send');
         })
         .catch(error => {
            console.log(error.message);
            alert('dont send ' + error.message);
         })
         .finally(() => {
            form.reset();
         })
   })
})
