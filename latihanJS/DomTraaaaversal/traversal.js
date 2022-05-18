// EVENT HANDLING
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

//   card.style.display = 'none';`````
// });

const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener('click', function (event) {
//     // close[i].parentElement.style.display = 'none';

//     event.target.parentElement.style.display = 'none';
//   });
// }

// ambil emlement close yg sedang kita click ini. lalu telusuri siapa orang tuanya? klo sudah ketemu lalu
// kita kasih style display none.

close.forEach(function (el) {
  el.addEventListener('click', (e) => {
    e.target.parentElement.style.display = 'none';
  });
});

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);
