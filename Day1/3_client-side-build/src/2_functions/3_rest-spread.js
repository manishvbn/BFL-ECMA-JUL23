// If we use, ... operator, on the lefthand side of assignment operator - REST
// If we use, ... operator, on the righthand side of assignment operator - SPREAD

// In ECMAScript 2015, we can use ... only with Iterable Objects (Arrays)
// In ECMAScript 2018, we can use ... with normal Objects also

// ----------------------------------Array Spread

// var arr1 = [10, 20, 30, 40, [50, 60]];

// // Reference Copy
// // var arr2 = arr1;

// // Shallow Copy
// // var arr2 = [...arr1];

// // Deep Copy
// var arr2 = JSON.parse(JSON.stringify(arr1));

// // Immer JS

// arr2[0] = 1000;
// arr2[4][0] = 5000;

// console.log("Array 1", arr1);
// console.log("Array 2", arr2);


// ---------------------------------------
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Destructuring
// var x = arr[0];
// var y = arr[1];

// var [x, y] = arr;
// console.log(`x = ${x}, y = ${y}`);

var [x, y, ...z] = arr;
// console.log(`x = ${x}, y = ${y}`);
// console.log(`z = ${z}`);

// console.log(arr.length);
// delete arr[2];
// console.log(arr.length);
// console.log(arr);

// z[0] = 3000;
// console.log(z);
// console.log(arr);

// // --------------------------------------

// var person1 = { id: 1, name: "Manish", address: { city: "Pune" } };

// // Reference Copy
// // var person2 = person1;

// // Shallow Copy
// // var person2 = {};
// // person2.id = person1.id;
// // person2.name = person1.name;
// // person2.address = person1.address;

// // ES 6
// // var person2 = Object.assign({}, person1);

// // ES 2018
// var person2 = { ...person1 };

// person2.name = "Abhijeet";
// person2.address.city = "Mumbai";

// console.log("Person 1:", JSON.stringify(person1));
// console.log("Person 2:", JSON.stringify(person2));

// -------------------------

var person = { id: 1, ename: "Manish", city: "Pune", state: "MH", pin: 411028 };

// var id = person.id;
// var ename = person.ename;
// var address = {
//     city: person.city,
//     state: person.state,
//     pin: person.pin
// };

var { id, ename, ...address } = person;

console.log("Id:", id);
console.log("Name:", ename);
console.log("Address:", address);


// const restSpread = ({ id, name, ...address }) => {
//     return (
//         <div>

//         </div>
//     );


//     <restSpread id={1} name={"Manish"} city={"Pune"} state={"MH"}/>