// function hello() {
//     console.log("Hello");
// }

// hello();

// Immediatly Invoked Function Expression (IIFE)
// (function () {
//     console.log("Hello 1");
// })();

// (function () {
//     console.log("Hello 2");
// }());

// (() => {
//     console.log("Hello 3");
// })();

// --------------------------------

(function (name) {
    console.log("Hello", name);
})("Manish");

(function (name) {
    console.log("Hello", name);
}("Abhijeet"));

((name) => {
    console.log("Hello", name);
})("Ramakant");
