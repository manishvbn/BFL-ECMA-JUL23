function CLCounter(interval = 1) {
    var count = 0;
    var by = interval;

    return {
        next: function () {
            return count += by;
        },
        prev: function () {
            return count -= by;
        }
    };
}

const PTCounter = (function () {
    function PTCounter(interval = 1) {
        this._count = 0;
        this._by = interval;
    }

    PTCounter.prototype.next = function () {
        return this._count += this._by;
    }

    PTCounter.prototype.prev = function () {
        return this._count -= this._by;
    }

    return PTCounter;
})();

class CCounter {
    constructor(interval = 1) {
        this._count = 0;
        this._by = interval;
    }

    next() {
        return this._count += this._by;
    }

    prev() {
        return this._count -= this._by;
    }
}

(function () {
    var clStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = CLCounter(i);
    }
    var clEnTime = new Date();

    var ptStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new PTCounter(i);
    }
    var ptEnTime = new Date();

    var cStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new CCounter(i);
    }
    var cEnTime = new Date();

    var clTime = clEnTime.getTime() - clStTime.getTime();
    var ptTime = ptEnTime.getTime() - ptStTime.getTime();
    var cTime = cEnTime.getTime() - cStTime.getTime();

    console.log("Closure: ", clTime, "ms");
    console.log("Prototype: ", ptTime, "ms");
    console.log("Class: ", cTime, "ms");
})();