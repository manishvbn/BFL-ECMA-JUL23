var a = [10, 20, 30];

// Create a function, which can append item to an array

// Impure Function
// function append(dataArr, item) {
//     dataArr.push(item);
//     return dataArr;
// }

// Pure Function
function append(dataArr, item) {
    var rArr = [...dataArr, item];
    return rArr;
}

var newArr1 = append(a, 40);
console.log(newArr1);       // [10, 20, 30, 40]

var newArr2 = append(a, 40);
console.log(newArr2);       // [10, 20, 30, 40]