// Answer These Questions:
//
// - What are essential classes?
// class of cookies, and ovens

// // - What attributes will each class have?
// class of cookies: type, time_start, time_finish, status (matang or hangus)
// class of ovens: same with cookies (array cookies)

// - What interface will each class provide?
// output interfaces of cookies : type, time_start, time_finish, status (matang or hangus)
// output interfaces of ovens: same with cookies (array cookies)

// - How will the classes interact with each other?
// the classes will interact with other using composition method

// - Which classes will inherit from others, if any?
// class of cookies inherit to other cookies
//
//
// Your code here

class cookies {
	constructor (type, time_finish, time_start) {
		this.type 		 = type || "Kue Kastengel"
		this.time_finish = time_finish
		this.time_start  = time_start
		this.status    	 = "Mentah"
	}
}

class ovens {
	constructor () {
		this.cookie 	 = []
	}
	
	setCookies (type, time_finish, time_start) {
		let kue = this.cookie.length
		// console.log(kue)
		if (type === "Kue Nastar") {
			this.cookie.push(new cookies(type, time_finish, time_start))
		} else {
			this.cookie.push(new cookies(type, time_start, time_finish))
		}
	}

	getCookies () {
		return this.cookie
	}

	cooking () {
		let timeCook = 15
		for (let i = 0; i < this.cookie.length; i++) {
			this.cookie[i].time_start += 5
			if (timeCook > this.cookie[i].time_start) {
				this.cookie[i].status = "Hampir Matang"
			} else if (timeCook == this.cookie[i].time_start) {
				this.cookie[i].status = "Matang"
			} else if (timeCook < this.cookie[i].time_start) {
				this.cookie[i].status = "Hangus"
			}
			console.log(this.cookie[i])
		}
	}

	statusCookie () {
		console.log("Status kue yang hangus: ")
		for (let i = 0; i < this.cookie.length; i++) {
			if(this.cookie[i].time_start >= this.cookie[i].time_finish) {
				console.log(`${this.cookie[i].type} was cooking in ${this.cookie[i].time_start} hours`)				
			}
		}
	}
}

// let kueCookies = new cookies()
// console.log(kueCookies.getCookies())
let ovenCookies = new ovens()
ovenCookies.setCookies("Kue Nastar", 2, 1)
ovenCookies.setCookies("Kue Tart", 3, 1)
console.log(ovenCookies.getCookies())

ovenCookies.cooking()
ovenCookies.cooking()
ovenCookies.cooking()

ovenCookies.statusCookie()
console.log(ovenCookies.getCookies())