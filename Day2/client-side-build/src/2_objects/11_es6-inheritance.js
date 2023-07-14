// class Vehicle {
//     constructor(m = "Honda") {
//         this._make = m || "Honda";
//     }

//     start() {
//         return `${this._make}, engine started`;
//     }
// }

// class FourWheeler extends Vehicle {
//     constructor(mk, md) {
//         super(mk);
//         this._model = md || "Civic";
//     }

//     start() {
//         var r = super.start();
//         return `${r}, model is ${this._model}`;
//     }

//     move() {
//         return `Moving like ${this._model}`;
//     }
// }

// let v = new FourWheeler("Ford", "Mustang");
// console.log(v.start());
// console.log(v.move());

// console.log(v);