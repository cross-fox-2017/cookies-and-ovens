// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Cookies {
  constructor(nama, waktuMasak) {
    this.nama = nama;
    this.waktu = 0;
    this.waktuMasak = waktuMasak;
    this.status = 'mentah'
  }

  masak() {
    this.waktu += 5
    if (this.waktuMasak > this.waktu) {
      this.status = 'hampir masak'
    } else if (this.waktuMasak == this.waktu) {
      this.status = 'matang'
    } else if (this.waktuMasak < this.waktu ) {
      this.status = 'gosong'
    }
  }

  printStatus() {
    console.log(`${this.nama} telah dimasak selama ${this.waktu} menit dan statusnya adalah ${this.status}`);
  }

}

class KueKacang extends Cookies {
  constructor() {
    super("Kue Kacang", 20)
  }
}

class KueCoklat extends Cookies {
  constructor() {
    super("Kue Coklat", 30)
  }
}

var kue1 = new KueKacang()
var kue2 = new KueCoklat()
console.log(kue1);
console.log(kue2);

kue1.masak()
kue2.masak()
kue1.printStatus()
kue1.masak()
kue2.masak()
kue1.printStatus()
kue1.masak()
kue2.masak()
kue1.printStatus()
kue1.masak()
kue2.masak()
kue2.printStatus()
kue1.masak()
kue2.masak()
kue1.printStatus()
kue1.masak()
kue2.masak()
kue2.printStatus()
