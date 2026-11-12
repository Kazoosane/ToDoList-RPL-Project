// 1. Inisialisasi array untuk menampung daftar tugas
let toDoArray = [];

// 2. Tangkap elemen HTML berdasarkan ID-nya
const btnTambah = document.getElementById("btnTambah");
const inputTugas = document.getElementById("inputTugas");
const areaArray = document.getElementById("areaArray");

// 3. Fungsi untuk menampilkan seluruh isi array ke layar
function tampilkanTugas() {
  let html = '<ul class="list-group">';

  for (let i = 0; i < toDoArray.length; i++) {
    html += '<li class="list-group-item">' + toDoArray[i] + '</li>';
  }

  html += '</ul>';
  areaArray.innerHTML = html;
}

// 4. Fungsi untuk menambahkan tugas (dipakai oleh klik tombol dan tombol Enter)
function tambahTugas() {
  let tugas = inputTugas.value.trim();

  // Validasi: cek apakah input kosong
  if (tugas === "") {
    alert("tugas tidak boleh kosong");
    return; // hentikan fungsi
  }

  // Tambahkan tugas ke array
  toDoArray.push(tugas);

  // Kosongkan kembali kolom input
  inputTugas.value = "";

  // Tampilkan ulang daftar tugas
  tampilkanTugas();
}

// 5. Aksi saat tombol "Tambah" diklik
btnTambah.onclick = function () {
  tambahTugas();
};

// 6. Aksi saat tombol Enter ditekan di kolom input
inputTugas.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    tambahTugas();
  }
});