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
  constructor(setTime) {
    this.timeCook    = setTime;
    this.waktuMatang = 0;
    this.status      = "Mentah";
  }

  cookCondition (){
    this.timeCook++;
    if(this.timeCook == 5){this.status = "Mentah"}
    if(this.timeCook < 10){this.status = "Hampir matang"}
    if(this.timeCook == this.waktuMatang){this.status = "Matang"}
    if(this.timeCook > this.waktuMatang){this.status = "Tutung"}
  }
}

class KueKacang extends Cookies {
  constructor(setTime, waktuMatang) {
    super(setTime)
    this.waktuMatang = 12
  }
}

class KueCoklat extends Cookies {
  constructor(setTime, waktuMatang) {
    super(setTime)
    this.waktuMatang = 10;
  }
}

let resultCookies = new KueCoklat(7);
    resultCookies.cookCondition();

console.log(resultCookies);
resultCookies.cookCondition();
console.log(resultCookies)
resultCookies.cookCondition();
console.log(resultCookies)
resultCookies.cookCondition();
console.log(resultCookies)
resultCookies.cookCondition();
console.log(resultCookies)
resultCookies.cookCondition();
console.log(resultCookies)
resultCookies.cookCondition();
console.log(resultCookies)
resultCookies.cookCondition();
console.log(resultCookies)
