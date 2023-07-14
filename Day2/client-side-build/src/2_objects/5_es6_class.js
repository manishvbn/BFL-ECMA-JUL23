class Person {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }
}

var p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());

console.log(p1);
console.log(p2);

// // 96 bytes


// --------------------------- Wrong Code
// class Person {
//     constructor(name) {
//         this._name = name;
//     }

//     // getName = function () {
//     //     return this._name;
//     // }

//     // setName = function (value) {
//     //     this._name = value;
//     // }

//     getName = () => {
//         return this._name;
//     }

//     setName = (value) => {
//         this._name = value;
//     }
// }

// var p1 = new Person("Manish");
// console.log(p1.getName());
// p1.setName("Abhijeet");
// console.log(p1.getName());

// var p2 = new Person("Subodh");
// console.log(p2.getName());
// p2.setName("Ramakant");
// console.log(p2.getName());

// console.log(p1);
// console.log(p2);
