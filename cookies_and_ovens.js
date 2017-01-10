// Answer These Questions:

/*
// - What are essential classes?
Class yg harus dibuat adalah class cookies dan class oven
// - What attributes will each class have?
Class cookies mempunyai attributes name, cookedTime
Class oven mempunyai attributes status, arrCookies, time
// - What interface will each class provide?
Class cookies tidak mempunyai methods
Class oven mempunyai method cooking, inputCookies
// - How will the classes interact with each other?
Class-class tersebut dapat berinteraksi dengan teknik composition
// - Which classes will inherit from others, if any?
Tidak ada
*/

// Your code here

class Cookies {
  constructor(name, cookedTime) {
    this.name = name;
    this.cookedTime = cookedTime;
  }
}

class Oven {
  constructor() { // bedakan dengan constructor(tree = [])
    this.status = "";
    this.time = 0;
    this.arrCookies = [];
  }

  inputCookies(name, cookedTime) {
    if(name == "Croissant") {
      this.arrCookies.push(new Cookies(name, cookedTime));
    }
    else if (name == "Chocolate Cookies") {
      this.arrCookies.push(new Cookies(name, cookedTime));
    }
    else if (name == "Macaron") {
      this.arrCookies.push(new Cookies(name, cookedTime));
    }
    return this.arrCookies;
  }

  cooking(time) {
    this.time = time;
    for (let i = 0; i < this.arrCookies.length; i++) {
      if (this.arrCookies[i]["cookedTime"] > this.time) {
        if (this.arrCookies[i]["cookedTime"] - this.time != 1) {
          console.log(`Lama memasak: ${this.time} menit, Status Kue: ${this.arrCookies[i]["name"]} belum matang.`);
        }
        if (this.arrCookies[i]["cookedTime"] - this.time == 1) {
          console.log(`Lama memasak: ${this.time} menit, Status Kue: ${this.arrCookies[i]["name"]} hampir matang.`);
        }
      }
      else if (this.arrCookies[i]["cookedTime"] == this.time) {
        console.log(`Lama memasak: ${this.time} menit, Status Kue: ${this.arrCookies[i]["name"]} sudah matang.`);
      }
      else if (this.arrCookies[i]["cookedTime"] < this.time) {
        console.log(`Lama memasak: ${this.time} menit, Status Kue: ${this.arrCookies[i]["name"]} gosong.`);
      }
    }
  }
}

let oven = new Oven();
oven.inputCookies("Croissant", 3);
oven.inputCookies("Chocolate Cookies", 4);
console.log(oven.inputCookies("Macaron", 5));
oven.cooking(4);
