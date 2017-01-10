"use strict"


class Cookies {
  constructor (kindOfcookies, timeStart){
    this.name = kindOfcookies
    this.start = timeStart
    this.timecooked = 0
    this.status = "Mentah"
  }

  checkstatus(){
    var timetoFinished = this.timecooked - this.start
    if( timetoFinished > 10){
      this.status = "Masih Mentah"
      console.log(`Kue cookies ${this.name} anda sudah dimasak selama ${this.start} menit  dan saat ini ${this.status}`)
    }
    else if(timetoFinished > 3){
      this.status = "Hampir Matang"
      console.log(`Kue cookies ${this.name} anda sudah dimasak selama ${this.start} menit  dan saat ini ${this.status}`)
    }
    else if (timetoFinished === 0){
      this.status = "Sudah Matang"
      console.log(`Kue cookies ${this.name} anda sudah dimasak selama ${this.start} menit  dan saat ini ${this.status}`)
    }
    else{
      this.status = "Hangus"
      console.log(`Kue cookies ${this.name} anda sudah dimasak selama ${this.start} menit  dan saat ini ${this.status}`)
    }
  }
}

class PeanutButter extends Cookies {

  constructor(kindOfcookies, timeStart){
    super(kindOfcookies,timeStart)
    this.timecooked = 30 // menit
  }

  checkstatusChild(){
    while(this.start < 60){
      //console.log(this.start)
      super.checkstatus()
      this.start += 5
    }
  }
}

class Chocochips extends Cookies {

  constructor(kindOfcookies, timeStart){
    super(kindOfcookies,timeStart)
    this.timecooked = 20 // menit
  }

  checkstatusChild(){
    while(this.start < 60){
      //console.log(this.start)
      super.checkstatus()
      this.start += 5
    }
  }
}

class Coconut extends Cookies {

  constructor(kindOfcookies, timeStart){
    super(kindOfcookies,timeStart)
    this.timecooked = 40 // menit
  }

  checkstatusChild(){
    while(this.start < 60){
      //console.log(this.start)
      super.checkstatus()
      this.start += 5
    }
  }
}

var Choco = new Chocochips("Chocochips",10)
var Kelapa = new Coconut("Coconut",3)
var PeanutButt = new PeanutButter("Peanut Butter",5)

Choco.checkstatusChild()
Kelapa.checkstatusChild()
PeanutButt.checkstatusChild()



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
