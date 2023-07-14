'use strict'

// In ES ‘this’ refers to the parent of the function and the object 
// through which the function was called
// function test1() {
//     console.log(this);
// }

// test1();

// const test2 = function () {
//     console.log(this);
// }

// test2();

// var p1 = {
//     id: 1,
//     test: function () {
//         console.log(this);
//     }
// };

// p1.test();

// setInterval(p1.test, 2000);

// const test3 = () => { 
//     console.log(this);
// }

// test3();

// console.log("In File: ",this);

// var self = this;

// const test3 = () => { 
//     console.log(this);
//     console.log(self === this);
// }

// test3();

// setInterval(test3, 2000);

// --------------------------------------------

// var p1 = {
//     id: 1,
//     name: "Manish",
//     display: function () {
//         console.log(JSON.stringify(this));
//     }
// }

// var p2 = {
//     id: 1,
//     name: "Manish",
//     city: "Pune",
//     display: function () {
//         console.log(JSON.stringify(this));
//     }
// }

// p1.display();
// p2.display();

// -----------------------------------------------

// function display(x, y) {
//     console.log(JSON.stringify(this));
//     console.log(x, y);
// }

// var p1 = {
//     id: 1,
//     name: "Manish",
// }

// var p2 = {
//     id: 1,
//     name: "Manish",
//     city: "Pune"
// }

// // display.call(p1, 20, 30);
// // display.call(p2, 20, 30);

// // var data = [20, 30];
// // display.apply(p1, data);
// // display.apply(p2, data);

// p1.display = display.bind(p1);
// p2.display = display.bind(p2);

// p1.display(20, 30);
// p2.display(20, 40);

// -----------------------------------------------

var person = {
    age: 0,
    growOld: function () {
        console.log(this);
        this.age += 1;
    }
};

// person.growOld();
// console.log(person);

// person.growOld();
// console.log(person);

// person.growOld();
// console.log(person);

document.getElementById('plusBtn').addEventListener('click', person.growOld.bind(person));