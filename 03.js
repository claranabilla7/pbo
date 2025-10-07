class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  belajar() {
    console.log(`${this.nama} sedang belajar.`);
  }
}

let mhs1 = new Mahasiswa("ahmad", 1234, "informatika");
mhs1.belajar();

let mhs2 = new Mahasiswa("cala", 5646456, "psikologi");
mhs2.belajar();

let mhs3 = new Mahasiswa("wawan", 1436, "kekerenan");
mhs3.belajar();
