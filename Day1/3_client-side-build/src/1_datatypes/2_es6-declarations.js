'use strict'

// let a = 10;
// console.log("a is: ", a);

// let b;
// b = 20;
// console.log("b is: ", b);

// ------------------------------------- Hoisting
// Not Hosited
// a = 10;
// console.log("a is:", a);
// let a;

// console.log("a is:", a);
// a = 10;

// ------------------------------------- No Typesafe (Dynamic)

// let a = 10
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// a = "Manish";
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// -----------------

// let a = 10;
// let a = "Manish";

// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// --------------------------------

// Global Scope
// Function Scope
// Block Scope

let i = "Hello";
console.log("Before, i:", i);

for (let i = 0; i < 5; i++) {
    console.log("Inside Loop, i:", i);
}

console.log("After, i:", i);


