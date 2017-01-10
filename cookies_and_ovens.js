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
class Cookies{
  constructor(nama,adonan,status, timecooking){
    this.nama = nama
    this.adonan = adonan
    this.status = 'mentah'
    this.time = 0
    this.timecooking = timecooking
  }

  memasak (){
    this.time += 5
    if(this.time < this.timecooking){
      this.statusHampir()
    }
    if(this.time == this.timecooking ){
      this.statusMasak()
    }
    if(this.time >  this.timecooking){
     this.statusHangus()
    }
  }

  statusHampir(){
    this.status =  "Hampir Masak"
  }
  statusHangus(){
    this.status =  "Sudah Hangus"
  }
  statusMasak(){
    this.status = "Status Masak"
  }

  print(){
    return console.log(`Nama : ${this.nama} , Bahan utama : ${this.adonan}, status: ${this.status}, jumlah : ${this.jumlah}, lama memasak : ${this.time}`)
  }
}
  class KueKacang extends Cookies {
    constructor(nama,adonan,status,jumlah, timecooking) {
      super (nama,adonan,status, timecooking)
      this.jumlah = jumlah
    }
  }
//var xxx = new Cookies("Cookies","Telur",2)
//xxx.print()
var vvv= new KueKacang("Kue Kacang","Kacang ","","5",15)
vvv.memasak()
vvv.print()
vvv.memasak()
vvv.print()
vvv.memasak()
vvv.print()
vvv.memasak()
vvv.print()
vvv.memasak()
vvv.print()
