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
class Kue {
  constructor(nama) {
    this.nama = nama
    this.status = "mentah"
    this.time = 0
  }

  panggang() {
    this.time += 2
    if (this.time >= this.lama_matang && this.time < this.lama_matang + 2) {
      this.status = "matang"
    } else if (this.time >= this.lama_matang + 2) {
      this.status = "gosong"
    }
  }
}

class KueKacang extends Kue {
  constructor(nama, status, time, lama_matang) {
    super(nama, status, time)
    this.lama_matang = 10
  }
}

class KueCoklat extends Kue {
  constructor(nama, status, time, lama_matang) {
    super(nama, status)
    this.lama_matang = 15
  }
}

var kueKacang = new KueKacang('kue kacang')
var kueCoklat = new KueCoklat('kue coklat')
kueKacang.panggang()
kueKacang.panggang()
kueKacang.panggang()
kueKacang.panggang()
kueKacang.panggang()
kueCoklat.panggang()
kueCoklat.panggang()
kueCoklat.panggang()
kueCoklat.panggang()
kueCoklat.panggang()
console.log(kueKacang)
console.log(kueCoklat)
kueKacang.panggang()
console.log(kueKacang)
kueCoklat.panggang()
kueCoklat.panggang()
kueCoklat.panggang()
kueCoklat.panggang()
console.log(kueCoklat)
