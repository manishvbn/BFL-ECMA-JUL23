// function greetings(message, name) {
//     console.log(`${message}, ${name}`);
// }

// greetings('Good Morning', 'Manish');
// greetings('Good Morning', 'Abhijeet');
// greetings('Good Morning', 'Ramakant');

// function Converter(toUnit, factor, offset, input) {
//     return [((offset + input) * factor).toFixed(2), toUnit].join("");
// }

// console.log(Converter(" INR", 80, 0, 100));
// console.log(Converter(" INR", 80, 0, 299));
// console.log(Converter(" INR", 80, 0, 876));
// console.log(Converter(" INR", 80, 0, 999));

// -----------------------------------------------

// function greetings(message) {
//     return function (name) {
//         console.log(`${message}, ${name}`);
//     }
// }

// const mGreet = greetings("Good Morning");

// mGreet("Manish");
// mGreet("Abhijeet");
// mGreet("Ramakant");

// function Converter(toUnit, factor, offset) {
//     return function(input){
//         return [((offset + input) * factor).toFixed(2), toUnit].join("");
//     }
// }

// const usdToInrConverter = Converter(" INR", 80, 0);

// console.log(usdToInrConverter(100));
// console.log(usdToInrConverter(299));
// console.log(usdToInrConverter(876));
// console.log(usdToInrConverter(999));

// const milesToKmConverter = Converter(" KM", 1.6, 0);

// console.log(milesToKmConverter(100));
// console.log(milesToKmConverter(299));
// console.log(milesToKmConverter(876));
// console.log(milesToKmConverter(999));

// -----------------------------------------------

function greetings(message, name) {
    console.log(`${message}, ${name}`);
}

const mGreet = greetings.bind(undefined, "Good Morning");

mGreet("Manish");
mGreet("Abhijeet");
mGreet("Ramakant");

function Converter(toUnit, factor, offset, input) {
    return [((offset + input) * factor).toFixed(2), toUnit].join("");
}

const usdToInrConverter = Converter.bind(undefined, " INR", 80, 0);

console.log(usdToInrConverter(100));
console.log(usdToInrConverter(299));
console.log(usdToInrConverter(876));
console.log(usdToInrConverter(999));

const milesToKmConverter = Converter.bind(undefined, " KM", 1.6, 0);

console.log(milesToKmConverter(100));
console.log(milesToKmConverter(299));
console.log(milesToKmConverter(876));
console.log(milesToKmConverter(999));