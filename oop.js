var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getId = function () {
        return 10;
    };
    Person.prototype.run = function () {
        console.log('run noww...');
    };
    return Person;
}());
var person1 = new Person('lana');
console.log("Type of person1: " + typeof person1);
console.log("Type of Person: " + typeof Person);
person1.run();
// ***
console.log("person1's name: " + person1.name);
// **
console.log('// --');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person));
var emp = new Employee('nala');
console.log("emp's name: " + emp.name);
console.log(emp.getId());
;
// constructor
console.log('// --');
var Lap = /** @class */ (function () {
    function Lap(name, doc) {
        this.name = name;
        this.doc = doc;
    }
    return Lap;
}());
var Lap2 = /** @class */ (function () {
    function Lap2(name) {
        this.name = name;
    }
    return Lap2;
}());
var lap = new Lap2('doc');
console.log(lap.name);
// interface
console.log('// --');
var Per1 = {
    name: 'lala',
    age: 2
};
var Per2 = {
    name: 'lala'
};
// Per2.name = "ss" error
Per2.age = 21;
