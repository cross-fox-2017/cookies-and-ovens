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
class Cookies{
	constructor(waktu_mulai, waktu_matang){
		this.waktu_mulai = waktu_mulai;
		this.waktu_matang = 0;
		this.status = "mentah";
	}

cook (){
	this.waktu_mulai++
		if(this.waktu_mulai < 8){
			return this.status;
		}
		if(this.waktu_mulai > this.waktu_matang ){
			this.status = "Hangus";
		}
		if(this.waktu_mulai === this.waktu_matang ){
			this.status = "Matang";
		}
		if(this.waktu_mulai < this.waktu_matang){
			this.status = "setengah mateng";
		}
	}
}

class KueKacang extends Cookies{
	constructor(waktu_mulai, waktu_matang){
		super(waktu_mulai)
		this.waktu_matang = 10
	}
}
class KueKeju extends Cookies{
	constructor(waktu_mulai, waktu_matang){
		super(waktu_mulai)
		this.waktu_matang = 10
	}
}
var kue = new KueKeju(3)
kue.cook()
console.log(kue)
kue.cook()
console.log(kue)
kue.cook()
console.log(kue)
kue.cook()
console.log(kue)
kue.cook()
console.log(kue)
kue.cook()
console.log(kue)
kue.cook()
console.log(kue)
kue.cook()
console.log(kue)

