// let a = 10;
// let b = "10";

// console.log(a == b);
// console.log(a === b);

// let a = { id: 0 };
// let b = { id: 0 };

// console.log(a == b);
// console.log(a === b);

// ---------------------------------------
// const color = "red";

// // Create a function, which should compare and give true, only if, 
// // color const is passed to it as an argument

// function compareColor(arg) {
//     console.log(arg === color);
// }

// compareColor(color);
// compareColor("red");

// var clr = "red";
// compareColor(clr);

// ---------------------------------------
// const color = { code: "red" };

// // Create a function, which should compare and give true, only if, 
// // color const is passed to it as an argument

// function compareColor(arg) {
//     console.log(arg === color);
// }

// compareColor(color);
// compareColor({ code: "red" });

// var clr = { code: "red" };
// compareColor(clr);

// ---------------------------------------

// const color = Symbol("red");

// // Create a function, which should compare and give true, only if, 
// // color const is passed to it as an argument

// function compareColor(arg) {
//     console.log(arg === color);
// }

// compareColor(color);
// compareColor(Symbol("red"));

// var clr = Symbol("red");
// compareColor(clr);

const pwd = Symbol("pwd");

var person = { id: 1, name: "Manish", uname: "ManishS", [pwd]: "1234" };

console.log(JSON.stringify(person));

console.log(person[pwd]);
console.log(person["name"]);