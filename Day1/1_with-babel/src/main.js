console.log("Hello from the main file....");

const obj = {
    arr: [1, 2, 3, 4, 5],
    printArr() {
        console.log(...this.arr);       // Array Spread
    },
    find(dataToFind) {
        return this.arr.find(n => n === dataToFind);
    }
};

obj.printArr();
console.log(obj.find(10));