let a;
console.log("a is:", a);

// Error: Missing initializer in const declaration.
// const env;
// console.log("env is:", env);

// const env = "dev";
// console.log("env is:", env);

// // TypeError: Assignment to constant variable.
// // env = "prod";
// // console.log("env is:", env);

// if (true) {
//     const env = "prod";
//     console.log("env is:", env);
// }

const person = { id: 1, name: "Manish" };
console.log(person);

person.id = 1000;
console.log(person);

delete person.id;
console.log(person);

person.city = "Pune";
console.log(person);
