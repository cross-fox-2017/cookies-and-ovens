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
"use strict"

class Cookies {
  constructor(waktu) {
    this.waktu = waktu
    this.status = 'mentah'
    this.waktuMatang = 0
  }

  cook(){
    this.waktu++
    //console.log(this.waktuMatang);
    if (this.waktu >= 6) {
      this.status = 'setengah matang'
    }
    if (this.waktu >= 8) {
      this.status = 'hampir matang'
    }
    if (this.waktu === this.waktuMatang) {
      this.status = 'matang!'
    }
    if (this.waktu > this.waktuMatang) {
      this.status = 'hangus!'
    }
  }
}

class KueKacang extends Cookies {
  constructor(waktu, waktuMatang) {
    super(waktu, waktuMatang)
    this.waktu = waktu
    this.waktuMatang = 10
  }
}

class KueCoklat extends Cookies {
  constructor(waktu) {
    super(waktu)
    this.waktuMatang = 12
  }
}

class KueJahe extends Cookies {
  constructor(waktu) {
    super(waktu)
    this.waktuMatang = 15
  }
}

// Driver code ..
let kue = new KueKacang(5)
console.log(kue);

kue.cook()
console.log(kue);
kue.cook()
console.log(kue);
kue.cook()
console.log(kue);
kue.cook()
console.log(kue);
kue.cook()
console.log(kue);
kue.cook()
console.log(kue);
