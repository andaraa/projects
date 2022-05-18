// var noAngkot = 1;

// while (noAngkot <= 10) {
//   console.log(`andgkot no ${noAngkot} sedang beroperasi dengan baik.`);
//   noAngkot++;
// }

// var angkotBeroperasi = 8;
// var jmlAngkot = 10;
// for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log(`angkot no ${noAngkot} sedang beroperasi dengan baik.`);
//   } else {
//     console.log(`angkot no ${noAngkot} sedang rusak.`);
//   }
// }

// for (noAngkot = 1; noAngkot <= angkotBeroperasi; noAngkot++) {
//   console.log('angkot no ' + noAngkot + 'sedang beroperasi.');
// }

// DOM selection
// document.getElementById menegmbalikan element
// const judul = document.getElementById('judul');
// judul.style.backgroundColor = 'hotpink';
// judul.innerHTML = 'Andara.911';
// judul.style.textAlign = 'center';
// // document.ElementsByTagName mengembalikan
// // HTML Collection.
// const p1 = document.getElementsByTagName('p')[0];
// p1.style.backgroundColor = 'red';

// BISA MENGGUNAKAN /LOOPING

// for (let i = 0; i < p.length; i++) {
//   p[i].style.bakgroundColor = 'orange';
// }

// Dengan document.getElementsByClassName;
// const p1 = document.getElementsByClassName('p1');
// p1[0].style.backgroundColor = 'red';

// const p2 = document.getElementsByClassName('p2');
// p2[0].style.backgroundColor = 'orangered';

// const p3 = document.getElementsByClassName('p3');
// p3[0].style.backgroundColor = 'pink';
// p3[0].innerHTML = 'ini di ubah';

// DOCUMENT QUERY SELECTOR() -> 1element
// const p1 = document.querySelector('.p1');
// p1.style.backgroundColor = 'blue';

// document.queryselector ALL

// const p = document.querySelectorAll('p');

// p[2].style.backgroundColor = 'blue';

// LOOPING
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'orangered';
// }

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'pink';

// DOM MANILPULAITION PART (2);
// -MANIPULASI ELEMENT
// MANIPULASI NODE
// const pBaru = document.createElement('p');
// const teksP = document.createTextNode('ini Pbaru');
// pBaru.appendChild(teksP);

// // // LALU DISIMPAN ELEMENT BARU DI AKHIR SECTION A
// const sectionA = document.querySelector('section#a');
// sectionA.appendChild(pBaru);
// pBaru.innerHTML = 'ini diubah ';

// // MENAMBAHKAN ELEMENT DI ANTARA KEDUA ELEMENT
// const liNew = document.createElement('li');
// const teksLiBaru = document.createTextNode('ini LI baru');

// liNew.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li = document.querySelector('section#b ul li:nth-child(2)');

// ul.insertBefore(liNew, li);

// // REMOVE CHILD = MENCOPOT ELEMNT

// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// REPLACE ELEMENT = MENGGANTI ELEMENT
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2 = document.createTextNode('judul baru');
// h2Baru.appendChild(teksH2);

// sectionB.replaceChild(h2Baru, p4);

// SET ATTRIBUTE
// const judul = document.getElementById('h1')[0];
// const a = document.querySelector('section#a a');

// a.setAttribute('id', 'link');
// a.getAttribute('href');

// judul.getAttribute('id');
// a.removeAttribute('href');

//
//
//
//
//
//
//
//
//
//
// JAVASCRIPT LANJUTAN===========================================================
//
// cara untuk membuat object pada javascript

// PROBLEM : tidak efektif untuk obejct yang banyak.
// 1. Object literal
// let siswa = {
//   nama: 'andika',
//   energi: 10,

//   makan: function (porsi) {
//     this.energi = this.energi += porsi;

//     console.log(`halo ${this.nama} selamat makan`);
//   },
//   main: function (jam) {
//     this.energi = this.energi -= jam;
//     console.log(`halo ${this.nama} selamat bermain`);
//   },
//   tidur: function (jam) {
//     this.energi = this.energi += jam * 2;
//     console.log(`halo ${this.nama} selamat tidur`);
//   },
// };

// let andiika = {
//   nama: 'andara',
//   energi: 10,
//   main: function (jam) {
//     this.energi = this.energi - jam;
//     console.log(`halo ${this.nama} selamat bermian!`);
//   },
// };

// 2. Function declatarion

// function Mahasiswa(nama, energi) {
//   let Mahasiswa = {};
//   Mahasiswa.nama = nama;
//   Mahasiswa.energi = energi;
// }
// Mahasiswa.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`halo ${this.nama} selamat makan.`);

//   return Mahasiswa;
// };
// let andika = Mahasiswa('andika', 10);

// function mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama} selamat makan`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama} selamat main`);
//   };
//   mahasiswa.tidur = function (jam) {
//     this.energi += jam * 2;
//     console.log(`halo ${this.nama} selamat tidur`);
//   };

//   return mahasiswa;
// }
// let andara = new mahasiswa('andara', 10);

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(MethodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }
// BIKIN TEMPLATE SEKALI sperti contoh yang di atas);

// Manggilnya cukup seperti contoh dibawah ini.
// let andika = Mahasiswa('andika', 10);
// let andara = Mahasiswa('andara', 10);

// 3. Constructor Function
// keyword new

// function names(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// // ini namanya METHOD
// this.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`haklo ${this.nama} selamat makan`);
// };
// // ini namanya METHOD
// this.main = function (jam) {
//   this.energi -= jam;
//   console.log(`halo ${this.nama}, selamat bermain`);
// };

// let andika = new names('andika', 10);
// ini yg kita akan gunakan unutuk kedepannya. karnena memudahkan kita
// untuk memebuat prototype. dan juga akan lebih jelas menggunakan object crate.

// 4. Object.create

// // MENGGUNAKAN PROTOTYPE DENGAN FUNCTION DECLARATION MENJADI CONSTRUCTOR
// const MethodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
// console.log(`Halo ${this.nama}, selamat makan!`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat bermain`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`halo ${this.nama}, selamat tidur`);
//   },
// };

// // BIKIN TEMPLATE SEKALI sperti contoh yang di atas);

// // Manggilnya cukup seperti contoh dibawah ini.
// let andika = Mahasiswa('andika', 10);
// let andara = Mahasiswa('andara', 10);

// PROTYPE INHERITANCE

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }
// // Method
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `halo ${this.nama} selamat makan`;
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `halo ${this.nama} selamat tidur`;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `halo ${this.nama}  selamat bermain!`;
// };

// let andika = new Mahasiswa('andika', 10);

// VERSI CLASS

// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan = function (porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan!`;
//   };

//   main = function (jam) {
//     this.energi -= jam;
//     return `halo ${this.nama},selamat bermain`;
//   };

//   tidur = function (jam) {
//     this.energi += jam * 2;
//     `return ${this.nama}, selamat tidur`;
//   };
// }

// let andika = new Mahasiswa('andika', 10);
// let doddy = new Mahasiswa('doddy', 20);

// ==================================================
//
// CLOSURE
// kenapa kita menggunakan closure?
// 1. untuk buat function factories.
// 2.seolah olah kita membua private method

// function init() {
//   let names = 'andika.p';
//   return function (names) {
//     console.log(names);
//   };
// }
// // // init di masukkan ke dalam variabel
// let callNm = init();
// callNm('andara');

// factories function
// function ucapkanSalam(waktu) {
//   // innner function
//   return function (nama) {
//     console.log(`halo ${nama}, selamat ${waktu} semoga harimu menyenangkan!`);
//   };
// }
// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');

// selamatPagi('andika');

// let add = (function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// })();

// counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// ======================================================
//
// ARRROW FUNCTION
// jika mempunyai 1 parameter

// const tampilNama = (nama) => {
//   return `halo, ${nama}`;
// };
// console.log('andika pradana');

// jika mempunyai 1 parameter atau lebih.
// const tampilNama = (nama, waktu) => {
//   return ` selamat ${waktu} ${nama}`;
// };
// console.log(tampilNama('andika', 'malam'));
// console log diatas harus di isi sesuai jumlah parameter

// IMPILISIT RETURN
// tidak usah pakai kurung, tidak pakai kurawal, tidak pakai return
// const tampilNama = (nama) => `halo ${nama}`;
// console.log(`andika`);

// TANPA PARAMETER
// const nama = () => `hello world`;
// console.log(nama());

// FUNCTION MAP
// let mahasiswa = ['andika', 'pradna', 'dika', 'erik'];

// let jmlHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jmlHuruf);

// MENGGUNAKAN ARROW FUNCTION
// let jmlHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jmlHuruf);

// let jmlHuruf = mahasiswa.map((nama) => ({
//   nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jmlHuruf);

// ARROW FUNCTION
// Untuk 1 Parameter

// const tampilNama = (nama) => {
//   return `halo, ${nama}`;
// };
// console.log('andika');

// Untuk 2 Parameter
// const tampilNama = (nama, waktu) => {
//   return `halo, ${nama} selamat ${waktu}`;
// };
// console.log(tampilNama('andika', 'malam'));

//Kalau Parameternya 1
// ini adalah IMPLISIT RETURN tanpa retur, tanpa kurawal\

// const tampilNama = (nama) => `halo ${nama}`;
// console.log('andika');

// =================================================
//
// KONSEP THIS PADA ARROW FUNCTION

// CONSTRUCTOR FUNCTION
// const Mahasiswa = function () {
//   this.nama = 'andika';
//   this.umur = 19;
//   this.sayHello = function () {
//     console.log(`helo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const andika = new Mahasiswa();

// ARROW FUNCTION

// const Mahasiswa = function () {
//   this.nama = 'andika';
//   this.umur = 19;
//   this.sayHello = function () {
//     console.log(`helo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };

//   console.log(this);
// };

// const andika = new Mahasiswa();

// ===================================================
//
//  FILTER , MAP & REDUCE

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// // // mencari angka yg lebih besar dari >=3
// // // for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// fiLTER

// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map

// kalikan semua angka dengan 2
// petakan semua element pada array dengan sebuah fungsi yang baru

// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// Reduce

// unutuk melakukaan sesuatu pada seluruh element pada array nya.

// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue);
// console.log(newAngka);

// method chining / brantai
// cari angka yg lebih besar dari ( >=5 ).
// kalikan 3

// jumlahkan

// const hasil = angka
//   .filter((a) => a > 5)
//   .map((a) => a * 3)
//   .reduce((acc, cur) => acc + cur);
// console.log(hasil);

// ======================================================
//
// LATIHAN filter, Map & Reduce

// ambil element semua video
// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// // pilih hanya yg JS lanjutan
// let jsLanjut = videos
//   .filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))

//   // ambil durasi  masing-masing video
//   // chining
//   .map((item) => item.dataset.duration)

//   // ubah dueasi nmenjadi float lalu kita ubah menit menjadi detik.
//   .map((waktu) => {
//     // 10:30 -> di split dulu [10,30]

//     const parts = waktu.split(':').map((part) => parseFloat(part));
//     return parts[0] * 60 + parts[1];
//   })

//   //   // jumlahkan semua detiknya.
//   //   // kalo 2parameter di bungkus lagi pake kurung.
//   .reduce((total, detik) => total + detik);

// // // ubah formatnya jadi jam, menit, detik.
// const jam = Math.floor(jsLanjut / 3600);
// jsLanjut = jsLanjut - jam * 3600;
// const menit = Math.floor(jsLanjut / 60);
// const detik = jsLanjut - menit * 60;

// // simpan di DOM
// const pDurasi = document.querySelector('.todocumenttal-durasi');
// pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

// const jmlVideo = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// const pJmlVideo = document.querySelector('.jumlah-video');
// pJmlVideo.textContent = `${jmlVideo} video`;

// console.log(jmlVideo);

// ==================================================================
// LALTIHAN TEMPLATE LITERALS
// 1.HTML FARGMENTS

// const mhs = {
//   nama: 'andika',
//   umur: 19,
//   nrp: '00929293939',
//   email: 'dharmeswara14@gmail.com',
// };
// const el = `<div class= mhs>
//         <h4>
//             Jangan Pernah meninggalkan sholat,
//             jika kamu atau rasanya ditinggalkan.
//         </h4>

// </div>`;

// TAGGED TEMPLATE
// const nama = 'andika';
// const umur = 19
// function coba (strings, ...values){
//     let result ='';
//     strings.forEach((str,i) =>){
//         result += $`{str} ${values [i] || ''  `
//     }
// }

// DESTRUCTURING VARIABEL

// const coba = ['1', '2', '3'];
// const [a,b,c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);

// DESTRUCTURING ARRAY
// const perkenalan = ['halo', 'saya', 'andika'];
// const [salam, satu, dua] = perkenalan;
// console.log(salam);
// console.log(satu);
// console.log(dua);

// SKIPPING ITEMS
// const perkenalan = ['halo', 'saya', 'andika'];
// const [salam, , nama] = perkenalan;
// console.log(nama);

// ASIGN KE VARIABEL BARU

// const mhs = {
//   nama: 'andika',
//   umur: 19,
// };
// const { nama: n, umur: u } = mhs;
// console.log(n);

// SWAP ITEMS
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// // bisa juga untuk menukar variabel.
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// RETURN VALUE PADA FUNCTION

// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(b);

// DESTRUCTURING PADA OBJECT
// const mhs = {
//   nama: 'andika',
//   umur: 19,
// };
// const { nama, umur } = mhs;
// console.log(`nama saya ${nama} dan umur saya ${umur}`);

// SPREAD OPERATOR
// Menggabungkan 2 array atau lebih.

// const mhs = ['andika', 'pradana', 'dika'];
// const dosen = ['doddy', 'sandika', 'sandi'];
// const orang = [...mhs, 'andara', ...dosen];
// console.log(orang);

// Mengcopy Array
// const mhs = ['andika', 'pradana', 'dika'];
// const mhs1 = [...mhs];
// mhs1[0] = 'fajar';
// console.log(mhs);

// PROMISE
// object yg memepresentasikan atau kegagalan sebuah
// event di masa yang akan datang
//janji terpenuhi
// states  (fullfield / rejected / pending)
// callback  ( resolve / reject / finally)
// aksi ( then= menjalankan resolve / catch = menjalankan reject)

// contoh1

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('ditepati');
//   } else {
//     reject('ingkar janji');
//   }
// });

// // janji1
// .then(response => console.log('ok :' + response));
// .catch(response => console.log('not ok :' + response));

// constoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('ora ono THR wkwkwkw');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject(' failed');
//     }, 2000);
//   }
// });

// console.log('mulai');
// janji2
// .then(response => console.log('ok :' + response));
// .catch(response => console.log('ok:' + response);)
// console.log('selesai');

// ASYNC AWAIT

const test = new Promise((resolve, reject) => {
  const time = 3000;
  if (time < 3000) {
    setTimeout(() => {
      resolve('selesai');
    }, time);
  } else {
    reject('gagal');
  }
});
test.then(() => console.log(test)).catch(() => console.log(test));

// console.log(test);
// test.then(() => console.log(test));

// function cobaPromise() {
//   return new Promise((resolve, reject) => {
//     const waktu = 5000;
//     if (waktu < 5000) {
//       setTimeout(() => {
//         resolve('selesai');
//       }, waktu);
//     } else {
//       reject('kelamaan');
//     }
//   });
// }
// // const coba = cobaPromise();
// // coba.then(() => console.log(coba)).catch(() => console.log(coba));

// async function cobaAsync() {
//   try {
//     const coba = await cobaPromise();
//     console.log(coba);
//   } catch (err) {
//     console.error(err);
//   }
// }

// cobaAsync();
// const btn = document.querySelector('#myBtnId');
// btn.onclick = function () {
//   var select = document.getElementById('myid');
//   const selected = select.options[select.selectedIndex].text;

//   alert(selected);
// };
