// Case 1 - Default Import

// import square from "./lib";
// console.log("Square: ", square(5));

// import sqr from "./lib";
// console.log("Square: ", sqr(5));

// import * as l from "./lib";
// console.log("Square: ", l.default(20));

// Case 2 - Named Import

// import { square } from './lib';
// console.log("Square: ", square(5));

// import { square as sqr } from './lib';
// console.log("Square: ", sqr(5));

// import * as l from "./lib";
// console.log("Square: ", l.square(20));

// Cse 3 - Multi Import

// import square, { check } from "./lib";
// console.log("Square: ", square(5));
// console.log("Check: ", check(5));

// import sqr, { check as chk } from "./lib";
// console.log("Square: ", sqr(5));
// console.log("Check: ", chk(5));

// import * as l from "./lib";
// console.log("Square: ", l.default(5));
// console.log("Check: ", l.check(5));

// -----------------------------------

// import app from './app-modules';
import { app } from './app-modules';

console.log("Square: ", app.square(5));
console.log("Check: ", app.check(5));
console.log("Test: ", app.test(5));    