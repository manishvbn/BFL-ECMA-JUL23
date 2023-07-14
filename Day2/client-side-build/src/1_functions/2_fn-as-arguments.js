var employees = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Neeraj", city: "Delhi" },
    { id: 3, name: "Abhijeet", city: "Pune" }
];

// --------------------------------------

// var pune_employees = [];

// // employees.forEach(function (employee) {
// //     if (employee.city === "Pune") {
// //         pune_employees.push(employee);
// //     }
// // });

// for (let i = 0; i < employees.length; i++) {
//     if(employees[i].city === "Pune")
//         pune_employees.push(employees[i]);
// }

// console.log(pune_employees);

// --------------------------------------

// var pune_employees = [];

// function filterLogic(employee) {
//     return employee.city === "Pune";
// }

// for (let i = 0; i < employees.length; i++) {
//     if(filterLogic(employees[i]))
//         pune_employees.push(employees[i]);
// }

// console.log(pune_employees);

// // --------------------------------------

// // Predicate Fn`
// function filterLogic(employee) {
//     return employee.city === "Pune";
// }

// var pune_employees = employees.filter(filterLogic);

// console.log(pune_employees);

// --------------------------------------

// var pune_employees = employees.filter(function (employee) {
//     return employee.city === "Pune";
// });

// console.log(pune_employees);


// // --------------------------------------

// var pune_employees = employees.filter((employee) => {
//     return employee.city === "Pune";
// });

// console.log(pune_employees);

// --------------------------------------

var pune_employees = employees.filter((employee) => employee.city === "Pune");
console.log(pune_employees);

