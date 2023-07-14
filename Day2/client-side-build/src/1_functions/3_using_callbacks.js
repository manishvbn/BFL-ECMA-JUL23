// // Dev 1
// function getString() {
//     const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];
//     var str = strArr[Math.floor(Math.random() * strArr.length)];
//     return str;
// }

// // Dev 2
// var s = getString();
// console.log(s);

// ----------------------------------------

// Dev 1
function getString(cb) {
    setInterval(function () {
        const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];
        var str = strArr[Math.floor(Math.random() * strArr.length)];
        cb(str);
    }, 2000);
}

// Dev 2
var s = getString(function (s) {
    console.log(s);
});