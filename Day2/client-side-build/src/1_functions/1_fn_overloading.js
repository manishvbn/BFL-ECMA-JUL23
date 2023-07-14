'use strict'

// function hello() {
//     console.log("Hello World!");
// }

// function hello(name) {
//     console.log(`Hello ${name}!`);
// }

// hello();
// hello("Manish");

// -------------------------------------------

// function m1() {
//     console.log("Hello World!");
// }

// function m2(name) {
//     console.log(`Hello ${name}!`);
// }

// function hello() {
//     if (arguments.length === 0) {
//         m1();
//     } else if (arguments.length === 1) {
//         m2(arguments[0]);
//     }
//     else {
//         throw new Error("Invalid arguments");
//     }
// }

// hello();
// hello("Manish");

// -------------------------------------------

// function hello() {
//     function m1() {
//         console.log("Hello World!");
//     }

//     function m2(name) {
//         console.log(`Hello ${name}!`);
//     }

//     if (arguments.length === 0) {
//         m1();
//     } else if (arguments.length === 1) {
//         m2(arguments[0]);
//     }
//     else {
//         throw new Error("Invalid arguments");
//     }
// }

// hello();
// hello("Manish");

// -------------------------------------------

// const hello = (function () {
//     function m1() {
//         console.log("Hello World!");
//     }

//     function m2(name) {
//         console.log(`Hello ${name}!`);
//     }

//     return function () {
//         if (arguments.length === 0) {
//             m1();
//         } else if (arguments.length === 1) {
//             m2(arguments[0]);
//         }
//         else {
//             throw new Error("Invalid arguments");
//         }
//     }
// })();

function hello() {
    if (arguments.length === 0) {
        console.log("Hello World!");
    } else if (arguments.length === 1) {
        console.log(`Hello ${arguments[0]}!`);
    } else {
        throw new Error("Invalid arguments");
    }
}

hello();
hello("Manish");