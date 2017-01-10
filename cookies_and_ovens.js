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

class CookieFactory {
  constructor(times) {
    this.times          = times
    this.statusCake     = 'Mentah'
    this.cookedTime     = 0
  }
  cook(){
    this.times += 1

    if(this.times == this.cookedTime){
      this.statusCake = 'Matang'
    } else if(this.times >= 5){
      this.statusCake = 'Hampir Matang'
    }else if (this.times >= 3) {
      this.statusCake = 'Setengah Matang'
    }
    if(this.times > this.cookedTime){
      this.statusCake = 'Hangus'
    }
  }
}

class RainbowCake extends CookieFactory {
  constructor(times, cookedTime) {
    super(times, cookedTime)
    this.cookedTime = 10
  }
}

class BoluCake extends CookieFactory {
  constructor(times, cookedTime) {
    super(times, cookedTime)
    this.cookedTime = 12
  }
}

let cookies = new RainbowCake(2)
console.log(cookies)
cookies.cook()
console.log(cookies)
cookies.cook()
console.log(cookies)
cookies.cook()
console.log(cookies)
cookies.cook()
console.log(cookies)
cookies.cook()
console.log(cookies)
cookies.cook()
console.log(cookies)
cookies.cook()
console.log(cookies)
cookies.cook()
console.log(cookies)
cookies.cook()
console.log(cookies)

let cookies2 = new BoluCake(4)
console.log(cookies2)
cookies2.cook()
console.log(cookies2)
cookies2.cook()
console.log(cookies2)
cookies2.cook()
console.log(cookies2)
cookies2.cook()
console.log(cookies2)
cookies2.cook()
console.log(cookies2)
cookies2.cook()
console.log(cookies2)
cookies2.cook()
console.log(cookies2)
cookies2.cook()
console.log(cookies2)
cookies2.cook()
console.log(cookies2)
cookies2.cook()
