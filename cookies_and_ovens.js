/*
  Answer These Questions:

  - What are essential classes?
    1). Class yang perlu dibuat adalah class kue dan class oven

  - What attributes will each class have?
    1). Class kue mempunyai atribut nama kue, lama memasak, dan waktu
    2). Class oven mempunyai atribut yang sama dengan kue namun inputan kue dan waktu berbeda beda

  - What interface will each class provide?
    1). Interface class kue akan mempresentasikan nama kue, lama memasak, dan waktu
    2). Class Oven akan mempresentasikan data kue dan status hangus atau matang

  - How will the classes interact with each other?
    1). Atribut class oven akan menggunakan composition dari class kue

  - Which classes will inherit from others, if any?
    1). Tidak menggunakan inheritance tapi menggunakan composition


  Your code here
*/

class Cookie {
  constructor(name, maxTime, time) {
    this.name = name
    this.maxTime = maxTime
    this.time = time
  }
}

class Oven {
  constructor() {
    this.cookies = [];
  }

  inputCookies(name, maxTime, time){
    console.log(this.cookies.length);

    if(name === "Kue Kacang"){
      this.cookies.push(new Cookie(name, maxTime, time))
    } else if(name === "Coklat"){
      this.cookies.push(new Cookie(name, maxTime, time))
    } else {
      this.cookies.push(new Cookie(name, maxTime, time))
    }
  }

  showCookies() {
    return this.cookies
  }

  cook() {
    for(let i = 0; i < this.cookies.length; i++){
      this.cookies[i].time += 1
    }
  }

  overcook() {
    console.log(`Kue yang hangus :`);
    for(let i = 0; i < this.cookies.length; i++){
      if(this.cookies[i].time >= this.cookies[i].maxTime){
        console.log(`${this.cookies[i].name} with time ${this.cookies[i].time}`)
      }
    }
  }
}

// let kueKacang = new Cookie('Kue Kacang', 4, 1)
// let coklat = new Cookie('Coklat', 3, 1);
let oven = new Oven();

oven.inputCookies('Kue Kacang', 4, 1, true)
oven.inputCookies('Coklat', 5, 1, true)
oven.inputCookies('Lapis Legit', 3, 1, true)
//
// show cookies
console.log(oven.showCookies())
// // tambah waktu masak
oven.cook();
oven.cook();
// // show overcooked cookies
oven.overcook()
console.log(oven.showCookies())
