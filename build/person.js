"use strict";
console.log('test');
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayName = function () {
        return this.name;
    };
    return Person;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Person;

//# sourceMappingURL=person.js.map
