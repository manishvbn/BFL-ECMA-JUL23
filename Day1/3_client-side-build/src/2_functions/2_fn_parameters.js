'use strict'

// Function Creation
// function <FunctionName>(<Parameters>) {
//     <FunctionBody>
// }

// Function Call
{/* <FunctionName>(<Arguments>;) */ }

// function hello(person_name) {
//     console.log(`Hello, ${person_name}`);
// }

// hello("Manish");
// hello(10);
// hello();
// hello("Manish", "Pune");

// --------------------------------------- Handle Less number of Arguments & Type
// Function to add 2 numbers
// function add(x, y) {
//     // x = x || 0;
//     // y = y || 0;

//     if (x === void 0) x = 0;
//     if (y === void 0) y = 0;

//     if ((typeof x == 'number') && (typeof y == 'number'))
//         return x + y;

//     throw new TypeError("Invalid Arguments");
// }

// console.log(add(10, 20));
// console.log(add(10));
// console.log(add());

// try {
//     console.log(add(10, 'abc'));
// } catch (e) {
//     console.error(e.message);
// }

//                  Default Parameters
// function add(x = 0, y = 0) {
//     if ((typeof x == 'number') && (typeof y == 'number'))
//         return x + y;

//     throw new TypeError("Invalid Arguments");
// }

// console.log(add(10, 20));
// console.log(add(10));
// console.log(add());

// try {
//     console.log(add(10, 'abc'));
// } catch (e) {
//     console.error(e.message);
// }

// --------------------------------------- Handle More number of Arguments

// function hello(person_name) {
//     console.log(`Hello, ${person_name}`);
//     console.log(arguments);
// }

// hello("Manish");
// hello("Manish", "Sharma");
// hello("Manish", "Sharma", "Pune");
// hello("Manish", "Sharma", "Pune", 411021);

// ----------------------------------------- Variable Argument Method

// function hello(person_name, ...extras) {
//     console.log(`Hello, ${person_name}`);
//     console.log(extras);
// }

// hello("Manish");
// hello("Manish", "Sharma");
// hello("Manish", "Sharma", "Pune");
// hello("Manish", "Sharma", "Pune", 411021);


function average(...numbers) {
    var sum = 0;

    for (const n of numbers) {
        sum += n;
    }

    if (numbers.length)
        return sum / numbers.length;
    else
        return sum;
}

console.log(average());
console.log(average(1));
console.log(average(1, 2));
console.log(average(1, 2, 3, 4, 5));
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(average(...arr));           // SPREAD

// ... used at the time of fn creation (in Fn Parameters) - REST Parameter
// ... used at the time of fn call (in arguments) - SPREAD OPERATOR

// REST - Combine to Array
// SPREAD - Split an Array

// If we use, ... operator, on the lefthand side of assignment operator - REST
// If we use, ... operator, on the righthand side of assignment operator - SPREAD