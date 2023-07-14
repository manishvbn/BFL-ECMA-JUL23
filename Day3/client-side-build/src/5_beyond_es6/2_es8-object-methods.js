// var person = { id: 1, name: "Manish" };

// // for (const key of Object.keys(person)) {
// //     console.log(key, person[key]);
// // }

// // for (const value of Object.values(person)) {
// //     console.log(value);
// // }

// // for (const pair of Object.entries(person)) {
// //     console.log(pair);
// // }

// for (const [key, value] of Object.entries(person)) {
//     console.log(key + " : " + value);
// }

// --------------------------------------------

var person = {};

Object.defineProperty(person, 'firstname', {
    value: "NA",
    writable: true,
    enumerable: true
});

var desp = Object.getOwnPropertyDescriptor(person, 'firstname');
console.log(desp);