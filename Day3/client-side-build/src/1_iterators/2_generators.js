// // Eager Executed
// function idNormal() {
//     console.log("Hello from Id Normal Function...");
// }

// // Lazy Executed
// function* idGenerator() {
//     console.log("Hello from Id Generator Function...");
// }

// // idNormal();
// // idGenerator();

// let genObj = idGenerator();
// // console.log(genObj);
// console.log(genObj.next());

// ------------------------------------
// function* idGenerator() {
//     console.log("Generator Function Execution Started...");
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     console.log("Generator Function Execution Completed...");
// }

// let genObj = idGenerator();
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());

// --------------------------------------

// class Queue {
//     constructor() {
//         this._dataArray = []
//     }

//     push(item) {
//         this._dataArray.push(item);
//     }

//     pop() {
//         return this._dataArray.shift();
//     }

//     // *[Symbol.iterator]() {
//     //     for (let i = 0; i < this._dataArray.length; i++) {
//     //         yield this._dataArray[i];
//     //     }
//     // }

//     *[Symbol.iterator]() {
//         yield* this._dataArray;
//     }
// }

// let ordersQueue = new Queue();
// ordersQueue.push({ id: 1, name: 'order 1' });
// ordersQueue.push({ id: 2, name: 'order 2' });
// ordersQueue.push({ id: 3, name: 'order 3' });

// for (const order of ordersQueue) {
//     console.log(order);
// }

// --------------------------------------

class Fibonacci {
    constructor(noOfItems) {
        this._noOfItems = noOfItems;
    }

    *[Symbol.iterator]() {
        let i = 0, a = 0, b = 1;

        while (i < this._noOfItems) {
            const [c, n] = [a, a + b];
            [a, b] = [n, a];
            i += 1;
            
            yield c;
        }
    }
}

let fibSeries = new Fibonacci(10);

let series = [...fibSeries];
console.log(series);