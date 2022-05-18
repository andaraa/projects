// JURAGAN ANGKOT EPS-1 MENGUGUNAKAN WHILE.
// ==================================================

// var noBuku = 1;
// while (noBuku <= 10) {
//   console.log('buku no ' + noBuku + 'ada');
//   noBuku++;
// }
// JURAGAN ANGKOT EPS-2 MENGUGUNAKAN FOR.
// =====================================================

// var noBuku = 1;
// var bukuDiPinjam = 7;
// var jumlahBuku = 15;

// while (noBuku <= jumlahBuku) {
//   console.log('buku seri ' + noBuku + 'ada');
//   noBuku++;
// }
// for(noBuku=1; noBuku<=jumlahBuku; noBuku++;){
//   console.log('buku no ' + noBuku + 'ada');
// }

//  FOR
// ======================================================
// for (nilai = 1; nilai <= 10; nilai++) {
//   console.log('hello ' + nilai + 'world');
// }

// JURAGAN TRUK PASIR EPS-3 MENGUGUNAKAN IF & ELSE.
// ====================================================

// var noBuku = 1;
// var bukuDiPinjam = 7;
// var jumlahBuku = 15;
// for (noBuku; noBuku <= jumlahBuku; noBuku++) {
//   if (noBuku <= bukuDiPinjam) {
//     console.log('buku seri ' + noBuku + ' sedang dipinjam');
//   } else {
//     console.log('buku seri ' + noBuku + ' ada');
//   }
// }

// JURAGAN TRUK PASIR EPS-4 MENGUGUNAKAN ELSE IF.
// =================================================

// var noBuku = 1;
// var bukuDiPinjam = 7;
// var jumlahBuku = 15;
// for (noBuku; noBuku <= jumlahBuku; noBuku++) {
//   if (noBuku <= bukuDiPinjam) {
//     console.log('buku seri ' + noBuku + ' sedang dipinjam');
//   } else if (noBuku === 13 || noBuku === 10) {
//     console.log('buku seri ' + noBuku + ' sudah dikembalikan.');
//   } else {
//     console.log('buku seri ' + noBuku + ' ada');
//   }
// }

// JURAGAN TRUK PASIR EPS-5 MENGGUNAKAN OR || .
// ===================================================

// var jmlTruk = 10;
// var trukBeroperasi = 6;
// for (var noTruk = 1; noTruk <= jmlTruk; noTruk++) {
//   if (noTruk <= trukBeroperasi) {
//     console.log('truk no ' + noTruk + ' sedang beroperasi dengan baik.');
//   } else if (noTruk === 8 || noTruk === 10) {
//     console.log('truk no ' + noTruk + ' sedang diluar jangkauan.');
//   } else {
//     console.log('truk no ' + noTruk + 'sedang rusak');
//   }
// }

// // MEMBUAT OBJECT <=

// // OBJECT LITERAL
// ==============================================

// var mhs = {
//   nama: 'andika',
//   nrp: '00000009',
//   email: 'andika@gmail.com',
//   jurusan: 'teknik mesin',
// };

// // FUNCTION DECLARATION OBJECT
// =====================================================

// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.jurusan = jurusan;

//   return mhs;
// }
// var mhs3 = buatObjectMahasiswa('erik', '7777777765', ' erik990@gmail.com', 'pendidikan');
// var mhs4 = buatObjectMahasiswa('andi', '3333333345', ' andi330@gmail.com', 'IT');

// // // CONSTRUCTOR
// =================================================

// function Mahasiswa(nama, nrp, email, jurusan) {
//   this.nama = nama;
//   this.nrp = nrp;
//   this.email = email;
//   this.jurusan = jurusan;
// }

// var mhs5 = new Mahasiswa('andara', '66666666666', 'andara556@gmail.com', 'dakwah');
// // setiap buat function constructor. pastikan ada THIS & NEW !!
// // JANGAN LUPA -NEW- !!!

// EVENT HANDLER

// const p3 = document.querySelector('.p3');
// p3.onclick = ubahwarna;

// function ubahwarna() {
//   p3.style.backgroundColor = 'red';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahwarnaP2;
// function ubahwarnaP2() {
//   p2.style.backgroundColor = 'red';
// }

// ADD EVNTLISTENR
// jika di click akan menambahkan list item baru
// dan dia akan menambah perubahan
// const p4 = document.querySelector('section#b p');

// p4.addEventListener('click', function () {
//   const ul = document.querySelector('ul');
//   const li = document.createElement('li');
//   const teksLiBaru = document.createTextNode('ini list item baru');

//   li.appendChild(teksLiBaru);
//   ul.appendChild(li);
// });
// EVENT HANDLER
// event yg pertama di timpa, karena dia gak peduli dengan apa yg dilakukan dengan onclick yg pertama
// dengan menggunakan FUNCTION EXPRESSION
// const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//   p3.style.backgroundColor = 'aqua';
// };
// p3.onclick = function () {
//   p3.style.color = 'red';
// };

// dua nya dilakukan click yg awal dilakukan dan yg kedua juga dilakukan.

// p3.addEventListener('click', function () {
//   p3.style.backgroundColor = 'blue';
// });
// p3.addEventListener('click', function () {
//   p3.style.backgroundColor = 'red';
// });
//
