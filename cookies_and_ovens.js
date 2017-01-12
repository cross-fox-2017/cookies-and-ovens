// Answer These Questions:
//
// - What are essential classes?
// Cookie, Peanut, Choco
// - What attributes will each class have?
// name, time, status, cookedTime
// - What interface will each class provide?
// - How will the classes interact with each other?
// menggunakan inherritance
// - Which classes will inherit from others, if any?
// Choco dan Peanut
//
// Your code here
"use strict"
class Cookie {
  constructor(name) {
    this.name = name
    this.time = 0
    this.status = "raw"
  }

  baked(val) {
    this.time += 5
    if (this.time <= val-5) {
      this.status = "cooked"
    } else if (this.time > val) {
      this.status = "scorched"
    }
  }
}

class Peanut extends Cookie {
  constructor(name, status, cookedTime) {
    super(name, status)
    this.cookedTime = 30
  }
  bakedddd(){
    super.baked(this.cookedTime)
  }
}

class Choco extends Cookie {
  constructor(name, status, cookedTime) {
    super(name, status)
    this.cookedTime = 10
  }
  bakedddd(){
    super.baked(this.cookedTime)
  }
}

var PeanutCok = new Peanut('Peanut');
var ChocoCok = new Choco('Choco');
PeanutCok.baked()
PeanutCok.baked()
PeanutCok.baked()
console.log(ChocoCok)
ChocoCok.baked()
PeanutCok.baked()
ChocoCok.baked()
PeanutCok.baked()
console.log(PeanutCok)
ChocoCok.baked()
PeanutCok.baked()
console.log(ChocoCok)
console.log(PeanutCok)
PeanutCok.baked()
console.log(PeanutCok)
