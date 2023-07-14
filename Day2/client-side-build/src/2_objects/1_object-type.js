// var toy1 = new Object();
// console.log(toy1);
// console.log(typeof toy1);

// var toy1 = {};
// console.log(toy1);
// console.log(typeof toy1);

// var toy1 = new Object();
// // console.log(toy1);
// // // console.log(typeof toy1);

// // console.log(toy1.constructor);
// // console.log(toy1.toString());

// toy1.color = "blue";
// toy1.shape = "circle";

// console.log(toy1);

// var toy2 = new Object();
// console.log(toy2);

// -------------------------------------
var toy1 = new Object();
var toy2 = new Object();

Object.prototype.color = "red";
Object.prototype.shape = "circle";

// console.log("Toy 1 Color", toy1.color);
// console.log("Toy 1 Shape", toy1.shape);

// console.log("Toy 2 Color", toy2.color);
// console.log("Toy 2 Shape", toy2.shape);

// console.log(toy1.__proto__);
// console.log(toy2.__proto__);

// console.log(toy1.__proto__ === toy2.__proto__);
// console.log(toy1.__proto__ === Object.prototype);
// console.log(toy2.__proto__ === Object.prototype);

console.log(toy1);
console.log(toy2);

toy2.color = "red";
toy2.shape = "square";

console.log(toy1);
console.log(toy2);

// console.log("Toy 1 Color", toy1.color);
// console.log("Toy 1 Shape", toy1.shape);

// console.log("Toy 2 Color", toy2.color);
// console.log("Toy 2 Shape", toy2.shape);

var toy3 = new Object();
console.log(toy3);
console.log(toy3.color);
console.log(toy3.shape);

var s = "Manish";
console.log(s.color);
console.log(s.shape);