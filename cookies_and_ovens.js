// Answer These Questions:
//
// - What are essential classes?
//membuat class Cookies, class kueKacang, class kueButter, class kueSoes

// - What attributes will each class have?
//nama kue, waktu awal kue, waktu masak kue, status kue
// - What interface will each class provide?
// extends
// - How will the classes interact with each other?
// dengan memanfaatkan extend dan memanggil attribut dari parents
// - Which classes will inherit from others, if any?
//tiap-tiap kue akan menjadi child dari class Cookies
//
// Your code here

class Cookies{
  constructor(name,timecook,status){
    this.name = name;
    this.time = 0;
    this.timecook = timecook;
    this.status = status;
  }

  masak(){

    if(this.time == 0){
      this.status = "mentah"
    }
    else if(this.timecook > this.time){
      this.status = "hampir masak"
    }
    else if(this.timecook == this.time){
      this.status = "selesai"
    }
    else if(this.timecook < this.time){
      this.status = "hangus"
    }

    this.time += 5;
  }

  keterangan(){
    console.log(`${this.name}, telah dimasak selama ${this.time} menit, status saat ini adalah ${this.status}`)
  }
}

class KueKacang extends Cookies{
  constructor(){
    super("Kue Kacang",25)
  }
}

class KueButter extends Cookies{
  constructor(){
    super("Kue Butter",35)
  }
}

class KueSoes extends Cookies{
  constructor(){
    super("Kue Soes",15)
  }
}
let kue1 = new KueKacang()
let kue2 = new KueButter()
let kue3 = new KueSoes()

do{
  kue1.masak();
  kue1.keterangan();
  kue2.masak();
  kue2.keterangan();
  kue3.masak();
  kue3.keterangan();

}while(kue1.status !== "hangus");
