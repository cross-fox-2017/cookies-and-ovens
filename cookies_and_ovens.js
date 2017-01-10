// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
// berbagai jenis kue
// mencatat waktu ketika masuk oven
// kapan harus angkat dari oven tiap kue yang berbeda agar tidak hangus
// Your code here
class Kue{
  constructor(rasa, waktuMasak, nama){
    this.rasa = rasa || "vanilla";
    this.waktuMasak = waktuMasak || 30;
    this.nama = nama
    this.tepung = 100
    this.telur = 3
  }
}
class KueKacang extends Kue{
  constructor(rasa, waktuMasak, nama, tepung, telur){
    super(rasa, waktuMasak, nama, tepung, telur);
    this.nama = "Kue Kacang";
    this.rasa = "kacang";
    this.waktuMasak = 20
  }
}

class Oven{
  constructor(kue){
    this.timer = 0;
    this.kue = kue;
    this.recipe = "";
    this.cook = false;
  }
  pilihResep(){
    switch (this.kue) {
      case 'kacang':
      this.recipe = new KueKacang()
        break;
      default:
      this.recipe = new Kue()
    }
  }
  masukOven(){
    this.cook = true
    this.timer = 0
  }
  ovenning(){
    let randomTime = Math.floor(Math.random()*10+5)
    this.timer+= randomTime
    if (this.timer < this.recipe.waktuMasak){
      console.log(`${this.recipe.nama} Belum Matang`);
    } else if (this.timer > this.recipe.waktuMasak+10){
      console.log(`${this.recipe.nama} Hangus :'(`);
    } else {
      return console.log(`${this.recipe.nama} Matang, Yeah!!`);
    }
  }
}

var oven = new Oven('kacang')
oven.pilihResep()
oven.ovenning()
oven.ovenning()
oven.ovenning()
oven.ovenning()
oven.ovenning()
