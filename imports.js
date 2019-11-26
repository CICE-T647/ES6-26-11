const { name, lastname } = require("./stringTemplates");
const helloWorld = require("./arrowFunctions");
const Employee = require("./class");

console.log(name);
console.log(lastname);
console.log(helloWorld());

const employee2 = new Employee("Francisco", "Perez", 1000);
employee2.getName();
