class Cookie {
  constructor(nama, waktuMasak) {
    this.nama = nama
    this.waktuMasak = waktuMasak
    this.status = 'mentah'
    this.time = 0
  }

  masak(waktu) {
    this.time += waktu
    if (this.waktuMasak > this.time) {
      this.status = "setengah matang"
    } else if (this.waktuMasak == this.time) {
      this.status = "sudah matang"
    } else if (this.waktuMasak < this.time) {
      this.status = "gosong"
    }
  }

  printStatus() {
    console.log( `${this.nama} sudah dimasak selamat ${this.time} dan hasilnya ${this.status}` );
  }
}

class KueKacang extends Cookie {
  constructor(nama, waktuMasak) {
    super(nama, waktuMasak)
  }
}

class KueCoklat extends Cookie {
  constructor(nama, waktuMasak) {
    super(nama, waktuMasak)
  }
}

class Oven {
  constructor() {
    this.cookies = []
  }

  tambahKue(nama, waktuMasak) {
    if (nama == "Kue Kacang") {
      this.cookies.push( new KueKacang(nama, waktuMasak) )
    } else if ( nama == "Kue Coklat" ) {
      this.cookies.push( new KueCoklat(nama, waktuMasak) )
    }

  }
}

var kue = new Oven();
kue.tambahKue("Kue Kacang", 15);
kue.tambahKue("Kue Coklat", 20);
kue.cookies[1].masak(5);
kue.cookies[1].masak(5);
kue.cookies[1].masak(5);
kue.cookies[1].masak(5);
kue.cookies[1].masak(5);
kue.cookies[1].printStatus()
// kue.tambahKue[0];
