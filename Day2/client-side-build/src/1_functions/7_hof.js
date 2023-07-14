// function add(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }

// // I want to log the arguments passed to the add and sub function
// // Where should we write the code?

// console.log(add(2, 3));
// console.log(sub(20, 3));

// -------------------------------------

// function add(x, y) {
//     console.log(`add called with args, ${x}, ${y}`);
//     return x + y;
// }

// function sub(x, y) {
//     console.log(`sub called with args, ${x}, ${y}`);
//     return x - y;
// }

// // I want to log the arguments passed to the add and sub function
// // Where should we write the code?

// console.log(add(2, 3));
// console.log(sub(20, 3));

// -------------------------------------

// function add(x, y) {
//     log(`add called with args, ${x}, ${y}`);
//     return x + y;
// }

// function sub(x, y) {
//     log(`sub called with args, ${x}, ${y}`);
//     return x - y;
// }

// function log(message) {
//     console.log(message);
// }

// // I want to log the arguments passed to the add and sub function
// // Where should we write the code?

// console.log(add(2, 3));
// console.log(sub(20, 3));

// ------------------------------------------------------ HOF (Higher Order Function)

// function add(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }

// // HOF
// function logDecorator(fn) {
//     return function (...args) {
//         console.log(`${fn.name} called with args, ${args}`);
//         return fn(...args);
//     }
// }

// const addWithLogger = logDecorator(add);
// const subWithLogger = logDecorator(sub);

// console.log(addWithLogger(2, 3));
// console.log(subWithLogger(20, 3));

