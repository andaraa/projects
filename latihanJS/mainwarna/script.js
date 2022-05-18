// MENGUBAH WARNA BODY
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function () {
  //   document.body.style.backgroundColor = 'aqua';
  //   document.body.setAttribute('class', 'biru-muda');
  document.body.classList.toggle('biru-muda');
};

// BUAT TOMBOL PAKE JS
const btn = document.createElement('button');
const teksBtn = document.createTextNode('Acak Warna');
btn.appendChild(teksBtn);

btn.setAttribute('type', 'button');

tUbahWarna.after(btn);

btn.addEventListener('click', function () {
  const r = Math.round(Math.round() * 255 + 1);

  document.body.style.backgroundColor = 'rgb(100, 100, 100,)';
});
