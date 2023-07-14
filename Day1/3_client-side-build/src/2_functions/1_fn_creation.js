// // Function Decalration Syntax - Is Hosited
// function hello1() {
//     console.log("Hello One from JavaScript World!");
// }

// hello1();

// // Function Expresstion Syntax - Is Hosited
// let hello2 = function () {
//     console.log("Hello Two from JavaScript World!");
// }

// hello2();

// // Function Constructor Syntax - Is Hosited
// let hello3 = new Function('console.log("Hello Three from JavaScript World!");');
// hello3();

// // Arrow
// let hello4 = () => {
//     console.log("Hello Four from JavaScript World!");
// }

// hello4();

// ----------------------------------------------

var i = 10;
console.log("i is: ", i);
console.log("typeof i is: ", typeof i);

var f = function () {
    console.log("Hello");
};
console.log("f is: ", f);
console.log("typeof f is: ", typeof f);

// Function is a type, which can refer to a block of code (Function Pointers/Delegates)

// Can we create a variable of type number?
// If yes; We should be able to create a variable of type function also.

// Can we create a variable of type number inside a function?
// If yes; We should be able to create a variable of type function inside a function also. (Nested Functions)

// function f1() {
//     function f2() {

//     }

//     f2();
// }

// Can we return a variable of type number from a function?
// If yes; We should be able to return a variable of type function from a function also. (Closure, Fn Currying, HOF)
// function f1() {
//     function f2() {

//     }

//     function f3() {

//     }

//     return f2;
// }


// Can we pass a variable of type number to a function?
// If yes; We should be able to pass a variable of type function to a function also. (Callbacks)

document.getElementById("b1").addEventListener("click", function() {})