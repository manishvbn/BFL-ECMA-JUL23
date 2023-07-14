// Constructor Function
const Person = (function () {
    function Person(name) {
        // Data Property
        this._name = name;
    }

    // Accessor Property
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this._name;
        },

        set: function (value) {
            this._name = value;
        }
    });

    return Person;
})();

var p1 = new Person("Manish");
console.log(p1.Name);
p1.Name = "Abhijeet";
console.log(p1.Name);

console.log(p1);

// 96 bytes