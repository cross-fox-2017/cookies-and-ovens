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
class Bake {
  constructor(arg) {
    this._cakeName = arg['cakeName']
    this._bakeTime = arg['bakeTime']
    this._random =  Math.floor(Math.random() * 4) +5
  }
  oven(){
    for (var i = 0; i < 12; i++) {
      if (i < this._random) {
        console.log(`${this._cakeName} 'Mentah'`);
      }else if (i == this._random){
        console.log(`${this._cakeName} 'Matang'`);
      }else if (i > this._random) {
        console.log(`${this._cakeName} 'Gosong'`);
      }
    }
  }
}

let masak = new Bake({cakeName: 'Chocholate Cake'})

masak.oven()
