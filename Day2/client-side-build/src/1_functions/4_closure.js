'use strict'

// var count = 0;

// function next() {
//     return count += 1;
// }

// setInterval(() => {
//     console.log(next());
// }, 2000);

// setTimeout(() => {
//     count = "abc";
// }, 5000)

// -------------------------

// function next() {
//     var count = 0;
//     return count += 1;
// }

// setInterval(() => {
//     console.log(next());
// }, 2000);

// -------------------------

// const next = (function () {
//     var count = 0;

//     return function () {
//         return count += 1;
//     }
// })();

// setInterval(() => {
//     console.log(next());
// }, 2000);

// -------------------------

const counter = (function () {
    var count = 0;

    return {
        next: function () {
            return count += 1;
        },
        prev: function() {
            return count -= 1;
        }
    };
})();

console.log(counter.next());
console.log(counter.next());
console.log(counter.prev());


// -----------------------------------------

// function getCounter(interval = 1) {
//     var count = 0;
//     var by = interval;

//     return {
//         next: function () {
//             return count += by;
//         },
//         prev: function() {
//             return count -= by;
//         }
//     };
// }

// const counter2 = getCounter(2);
// console.log(counter2.next());
// console.log(counter2.next());
// console.log(counter2.prev());

// const counter5 = getCounter(5);
// console.log(counter5.next());
// console.log(counter5.next());
// console.log(counter5.prev());
