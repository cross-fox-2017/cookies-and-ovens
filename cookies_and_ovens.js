// Answer These Questions:
//
// - What are essential classes?
    // class OVEN
    // class cake
    // class cookies extends class cake
    // class chocolate extends class cake
    // class cheese extends class cake
// - What attributes will each class have?
    // status - medium || well-done || overcooked
// - What interface will each class provide?
  //
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class cake{

    constructor(nama,time,status){
      this._nama = nama
      this._time = time || 0;
      this._status = "raw"

    }

    baked(){

        this._time += 1;
        console.log(this._time_cooked);

        if(this._time == this._time_cooked)
        {
            this._status = "well done !"
            console.log(`Cake : ${this._nama}, Minute : ${this._time}, Status : ${this._status}`);

        }else if(this._time > this._time_cooked)
        {
            this._status = "Over Cooked !"

            console.log(`Cake : ${this._nama},  Minute : ${this._time} Status : ${this._status}`);
        }else {

            console.log(`Cake : ${this._nama},  Minute : ${this._time} Status : ${this._status}`);
        }


    }
}

class chocolate extends cake{

      constructor(nama){
          super(nama,time,status)
          this._time_cooked = 10;

      }

      baked(){
          super.baked();
      }

}

class cheese extends cake{

      constructor(nama,time){
          super(nama)
          this._time_cooked = 9;

      }

}
class strawberry extends cake{

      constructor(nama,time){
          super(nama)
          this._time_cooked = 4;
      }
}

let choc = new chocolate('chocolate');

    do{
      choc.baked();
    }while(choc._status != "Over Cooked !")

// choc.baked();
// choc.baked();
// choc.baked();
// choc.baked();
// choc.baked();
// choc.baked();
// choc.baked();
// choc.baked();
// choc.baked();
// choc.baked();
