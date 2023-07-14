// ---------------------------------------------------- Object.assign (Shallow Copy)

// let source = { id: 1, name: "Manish", address: { city: "Pune" } };

// let assignedObj = Object.assign({}, source);

// assignedObj.name = "Abhijeet";
// assignedObj.address.city = "Mumbai";

// console.log(source);
// console.log(assignedObj);

// ---------------------------------------------------- Object.create
// Creates a new object, using an existing object as the prototype of the newly created object.

// let source = { id: 1, name: "Manish", address: { city: "Pune" } };

// let assignedObj = Object.assign({}, source);
// let createdObj = Object.create(source);

// console.log("Source: ", source);
// console.log("Assign: ", assignedObj);
// console.log("Create: ", createdObj);

// --------------------------------------------------------

// let source = { id: 1, name: "Manish" };

// // Add a new Property
// source.city = "Pune";
// console.log(source);

// // Delete a Property
// delete source.id;
// console.log(source);

// // Modify a Property Value
// source.name = "Abhijeet";
// console.log(source);

// ----------------------------------------------------------

// let source = { id: 1, name: "Manish" };

// // Add a new Property           - Not Allowed
// // Delete a Property            - Allowed
// // Modify a Property Value      - Allowed

// Object.preventExtensions(source);

// if (Object.isExtensible(source)) {
//     source.city = "Pune";
//     console.log(source);
// } else {
//     console.warn("Source Object is not Extensible");
// }

// // Delete a Property
// delete source.id;
// console.log(source);

// // Modify a Property Value
// source.name = "Abhijeet";
// console.log(source);

// ----------------------------------------------------------

// let source = { id: 1, name: "Manish" };

// // Add a new Property           - Not Allowed
// // Delete a Property            - Not Allowed
// // Modify a Property Value      - Allowed

// Object.seal(source);

// if (!Object.isSealed(source)) {
//     source.city = "Pune";
//     console.log(source);

//     delete source.id;
//     console.log(source);
// } else {
//     console.warn("You cannot add or delete property from the Source Object");
// }

// // Modify a Property Value
// source.name = "Abhijeet";
// console.log(source);

// ----------------------------------------------------------

let source = { id: 1, name: "Manish" };

// Add a new Property           - Not Allowed
// Delete a Property            - Not Allowed
// Modify a Property Value      - Not Allowed

Object.freeze(source);

if (!Object.isFrozen(source)) {
    source.city = "Pune";
    console.log(source);

    delete source.id;
    console.log(source);

    source.name = "Abhijeet";
    console.log(source);
} else {
    console.warn("You cannot add, delete or modify property in the Source Object");
}