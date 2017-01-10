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
class Ingredient {
  constructor(flavour) {
    this._flavour = flavour
  }
}

class Bake extends Ingredient {
  constructor(flavour, chefTime) {
    super(flavour)
    this._bakeTime = 0
    this._chefTime = chefTime
  }
  oven(){
    if (this._flavour == 'Chocolate') {
      this._bakeTime = 10
    }else if (this._flavour == 'Cheese') {
      this._bakeTime = 20
    }
    return this._bakeTime
  }
  baking(){
    if (this._chefTime < this._bakeTime) {
      return 'Belum Matang'
    }else if (this._chefTime == this._bakeTime) {
      return 'Sudah Matang'
    }else if(this._chefTime > this._bakeTime){
      return 'Gosong'
    }
  }

  bakingResult(){
    this.baking()
    console.log(`Your ${this._flavour} Cake is ${this.baking()}`);
  }

}

let masak = new Bake('Chocolate',30)
masak.oven()
masak.bakingResult()
