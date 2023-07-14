class Person {
    constructor(name) {
        this._name = name;
        this._age = 0;
    }

    get Name() {
        return this._name;
    }

    set Name(value) {
        this._name = value;
    }

    get Age() {
        return this._age;
    }

    set Age(value) {
        this._age = value;
    }
}

var p1 = new Person("Manish");
console.log(p1.Name);
console.log(p1.Age);
p1.Name = "Abhijeet";
p1.Age = 40;
console.log(p1.Name);
console.log(p1.Age);
