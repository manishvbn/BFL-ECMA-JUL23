var fname = "Manish";
var lname = "Sharma";



function tagFunc(strings, exp) {
    // console.log(strings);
    // console.log(exp);

    return exp + "\n" + strings[0] + strings[1];
}

console.log(`Hello ${fname}, How are you?`);
console.log(tagFunc`Hello ${fname}, How are you?`);