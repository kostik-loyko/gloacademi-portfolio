const timer = document.querySelector('.timer__time');

// ТЕКУЩЕЕ ВРЕМЯ

// function time() {
//    const date = new Date();

//    const hours = date.getHours();
//    const minuts = date.getMinutes();
//    const seconds = date.getSeconds();

//    const fhours = hours < 10 ? '0' + hours : hours;
//    const fminuts = minuts < 10 ? '0' + minuts : minuts;
//    const fseconds = seconds < 10 ? '0' + seconds : seconds;
//    timer.textContent = `${fhours}:${fminuts}:${fseconds}`;
// }

// setInterval(time, 500);

let deadLine;

function time() {
   const time = new Date().getTime();
   const timeDeadline = new Date('31 march 2022').getTime();

   const timeRemaining = (timeDeadline - time) / 1000;

   const day = Math.floor(timeRemaining / 60 / 60 / 24);
   const hours = Math.floor(timeRemaining / 60 / 60 % 24);
   const minuts = Math.floor(timeRemaining / 60 % 60);
   const seconds = Math.floor(timeRemaining % 60);

   const fday = day < 10 ? '0' + day : day;
   const fhours = hours < 10 ? '0' + hours : hours;
   const fminuts = minuts < 10 ? '0' + minuts : minuts;
   const fseconds = seconds < 10 ? '0' + seconds : seconds;

   if (timeRemaining <= 0) {
      clearInterval(deadLine);
      timer.textContent = '00д:00ч:00м:00с'
   } else {
      timer.textContent = `${fday}д:${fhours}ч:${fminuts}м:${fseconds}с`;
   }
}

deadLine = setInterval(time, 500);