class Queue {
    constructor() {
        this._dataArray = []
    }

    push(item) {
        this._dataArray.push(item);
    }

    pop() {
        return this._dataArray.shift();
    }

    [Symbol.iterator]() {
        let i = 0;
        const self = this;

        return {
            next: function () {
                let v, d = true;

                if (self._dataArray[i] !== undefined) {
                    v = self._dataArray[i];
                    d = false;
                    i++;
                }

                return {
                    value: v,
                    done: d
                };
            }
        };
    }
}

let ordersQueue = new Queue();
ordersQueue.push({ id: 1, name: 'order 1' });
ordersQueue.push({ id: 2, name: 'order 2' });
ordersQueue.push({ id: 3, name: 'order 3' });

// console.log(ordersQueue.pop());
// console.log(ordersQueue.pop());
// console.log(ordersQueue.pop());

for (const order of ordersQueue) {
    console.log(order);
}

// console.log(Object.getOwnPropertySymbols(Array.prototype));
// console.log(Object.getOwnPropertySymbols(Map.prototype));
// console.log(Object.getOwnPropertySymbols(Set.prototype));
// console.log(Object.getOwnPropertySymbols(Queue.prototype));
