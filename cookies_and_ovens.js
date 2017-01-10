// Answer These Questions:
//
// - What are essential classes?
// Adonan , Cookies, dan jenis2 Cookies nya(Chocolate cookies, dll.)
// - What attributes will each class have?
// Adonan(timeIn dan timeOut) , cookies(jenis ,bahan dan status), jenis cookies(jenis, bahan,status dan jumlah)
// - What interface will each class provide?
// // Adonan(timeIn dan timeOut) , cookies(jenis ,bahan dan status), jenis cookies(jenis, bahan,status dan jumlah)
// - How will the classes interact with each other?
// cookies dan adonan bersifat agregrasi sedangkan ChocolateCookies inheritance dari Cookies
// - Which classes will inherit from others, if any?
// ChocolateCookies inherit dari Cookies
//
//
// Your code here
class Adonan{
  constructor(timeIn,timeOut){
    this.timeIn= timeIn
    this.timeOut= timeOut
    if(this.timeOut-this.timeIn <= 5){
      this.status= 'mentah'
    }
    else if(this.timeOut-this.timeIn > 10){
      this.status= 'hangus'
    }
    else if(this.timeOut-this.timeIn < 10 && this.timeOut-this.timeIn > 5){
      this.status= 'hampir masak'
    }
    else if(this.timeOut-this.timeIn===10){
      this.status='selesai'
    }
  }

}

class Cookies{
  constructor(jenis, bahan){
    this.jenis = jenis
    this.bahan = bahan
    this.status = this.bahan.status
  }
  cook(){
    return this.status
  }
}

class ChocolateCookies extends Cookies{
  constructor(jenis, bahan, jumlah){
    super(jenis,bahan)
    this.jumlah = jumlah
  }
  cook(){
    return `${this.jumlah} kue ${this.jenis} kondisinya ${super.cook()}`
  }
}


var adon = new Adonan(2,11)
let choco = new ChocolateCookies("chocolate",adon, 3)
console.log(choco.cook())
