'use strict'
// console.log("Hello from declarations.js");

// a = 10;
// console.log("a is:", a);

// -------------------------

// var a = 10;
// console.log("a is:", a);

// var b;
// b = 20;
// console.log("b is:", b);

// function test() {
//     var a = 1000;
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is: ", a);

// ------------------------------------- Hoisting
// Hoisting - Hoisting is JavaScript Runtime's default behavior of moving declarations to the top before execution

// a = 10;
// console.log("a is:", a);
// var a;

// console.log("a is:", a);
// var a = 10;

// Runtime sees the code
// var a;
// console.log("a is:", a);
// a = 10;

// ------------------------------------- No Typesafe (Dynamic)

// var a = 10
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// a = "Manish";
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// -------------------------------------
// You can create a variable with same name using var keyword
// Runtime will pick the nearest variable declaration/initialization

// var a = 10;
// var a = "Manish";

// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// ------------------------------------- Scope

// // Global to this Module(File)

// var a = 10;

// function test() {
//     console.log("Inside test(), a is: ", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// Global to this Module(File)

// ----------------------------- Function Scope (Local Scope)

// function test() {
//     var a = 10;
//     console.log("Inside test(), a is: ", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// --------------------
// Block Scoping is not supported with var keyword

var i = "Hello";
console.log("Before, i:", i);

// for (var i = 0; i < 5; i++) {
//     console.log("Inside Loop, i:", i);
// }

// function iterate() {
//     for (var i = 0; i < 5; i++) {
//         console.log("Inside Loop, i:", i);
//     }
// }

// iterate();

// IIFE
// (function () {
//     for (var i = 0; i < 5; i++) {
//         console.log("Inside Loop, i:", i);
//     }
// })();

for (var i_1 = 0; i_1 < 5; i_1++) {
    console.log("Inside Loop, i_1:", i_1);
}

console.log("After, i:", i);
