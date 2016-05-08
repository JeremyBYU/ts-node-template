"use strict";
var person_1 = require('./person'); // Javascript E
var greeter_1 = require('./greeter/greeter');
var p1 = new person_1.default('Javascript Class, no types');
var g1 = new greeter_1.default('Typescript Class, has types');
setTimeout(function () {
    console.log(p1.sayName());
    console.log(g1.greet());
}, 10000);

//# sourceMappingURL=app.js.map
