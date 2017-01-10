/*
Sebagai tukang masak, saya ingin membuat berbagai jenis kue (kue kacang, coklat dan lain sebagainya.)
Sebagai tukang masak, saya ingin menumpuk adonan kue ke dalam oven.
Sebagai tukang masak, saya ingin tahu kapan harus mengangkat kue saya dari oven biar tidak hangus.

Apa saja class yang perlu dibuat?
Apa saja properti yang dipunyai setiap class?
Apa saja interface yang perlu ada pada tiap class?
Bagaimana class berinteraksi dengan class lainnya?
Class mana yang merupakan inheritance, jika ada?

Menerima berbagai tipe kue, masing-masing waktu memasaknya juga berbeda
Tambahkan status pada adonan: ‘mentah’, ‘hampir masak’, ‘selesai’, ‘hangus’.

*/
class Masak {
    constructor(params) {
        this.namaKue = params['namaKue'];
        this.waktuMasak = params['waktuMasak']
    }

    oven() {
        var namaKue = this.namaKue
        var waktuMasak = this.waktuMasak
        var hampirMasak = this.waktuMasak - 2
        var i = 1
        var time = setInterval(function() {
            if (i == 20) {
                clearInterval(time)
            } else {
                if (i < hampirMasak) {
                    console.log(`${namaKue} Masih Mentah`);
                } else if (i < waktuMasak) {
                    console.log(`${namaKue} Hampir Masak Siap ya`);
                } else if (i == waktuMasak) {
                    console.log(`${namaKue} Sudah Matang Ayo Diangkat`);
                } else {
                    console.log(`${namaKue} Hangus`);
                }
                i++
            }
        }, 1000)

    }
}

var daftarKue = [{
    namaKue: "Kue Kacang",
    waktuMasak: 15
}, {
    namaKue: "Kue Coklat",
    waktuMasak: 17
},{
  namaKue: "Kue Sagu",
  waktuMasak: 18
}]

console.log(`Siap-Siap Memasak ${daftarKue[0].namaKue}`);
var makanan = new Masak(daftarKue[0])
makanan.oven();
var i = 1;
var panggilMasak = setInterval(function() {
        if (i == daftarKue.length) {
          clearInterval(panggilMasak)
        } else {
            console.log(`Siap-Siap Memasak ${daftarKue[i].namaKue}`);
            var makanan = new Masak(daftarKue[i])
            makanan.oven();
            i++
        }
}, 20000)
