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
class Cook{
  constructor(rasa,waktuPembuatan){
    // this.tepung = tepung;
    this.rasa = rasa;
    this.waktuPembuatan = waktuPembuatan;

  }
  setCookie(newRasa,newWaktu){
    this.rasa =newRasa;
    this.newWaktu = newWaktu;
  }
  getCookie(){
    return this.rasa,this.waktuPembuatan;
    // return this.rasa
  }
}

class Oven{
  constructor(cookie,time = 0,level){
    this.cookie = cookie;
    this.time = time;
    this.level = level;

  }
  cookCookie(str,lamacookie){
    var c = 0;

    while(c<=98){
      this.cookie = new Cook(str,lamacookie);

      if( this.time == this.cookie["waktuPembuatan"] ){
      //  this.time = this.cookie["waktuPembuatan"] ;
       this.level = "welldone"
       c = 99 ;
       console.log(`Oven time = ${this.time +1}mins , Cookie : ${this.cookie["rasa"]},level kematangan ${this.level}`)
       console.log(this.cookie);
       console.log("\n")

       this.time = 0;
      }else {
        this.time+= 1;
        this.level = "medium"
        console.log(`Oven time = ${this.time}mins , Cookie : ${this.cookie["rasa"]},level kematangan ${this.level}`)
        c++;
      }
    }
  }

// if((this.time < this.cookie["waktuPembuatan"]))
}

var makeCookie = new Oven();

//name cookie , waktu pembuatan
makeCookie.cookCookie("peanut",3)

makeCookie.cookCookie("cheese",10)
