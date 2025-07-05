"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let x = 10;
x = 11;
console.log(typeof x);
let y = 12;
let z = 13;
let userName = "Pablo";
let userAge = 19;
const isAdmin = true;
const permissions = ["Create", "Read", "Update", "Delete"];
console.log(typeof userName, typeof userAge, typeof isAdmin, typeof permissions);
console.log(permissions);
const newUser = ["Gabriel", 19, false, ["Read"]];
console.log(newUser);
const objectUser = {
    name: "Evandro",
    age: 42,
    isAdmin: false,
    permissions: ["Read"]
};
console.log(objectUser);
let camaleon = "1";
console.log(camaleon, typeof camaleon);
camaleon = true;
console.log(camaleon, typeof camaleon);
let id = 1;
console.log(id, typeof id);
id = "9c2e4e56-5e8f-4c90-8d5d-7c0f68e1f3f9";
console.log(id, typeof id);
let newId = "7c2e4e56-5e8f-4c90-8d5d-7c0f68e1f3f7";
console.log(newId, typeof newId);
newId = 2;
console.log(newId, typeof newId);
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
    Size["GG"] = "Extra Grande";
})(Size || (Size = {}));
const shirt = {
    name: "Camisa Branca",
    size: Size.GG
};
console.log(shirt);
let fixedVariable = "Teste";
console.log(typeof fixedVariable);
function sum(a, b) {
    if (a + b !== 0) {
        return a + b;
    }
}
console.log("Soma:", sum(2, 2));
function hello(name) {
    if (typeof name === "string") {
        console.log(`Olá, ${name}.`);
    }
    else {
        console.log("Olá");
    }
}
hello();
hello("Pablo Valentin");
function subtract(numbers) {
    return numbers.firstNumber - numbers.secondNumber;
}
console.log("Subtração:", subtract({ firstNumber: 1, secondNumber: 2 }));
function multiply(numbers) {
    return numbers.firstNumber * numbers.secondNumber;
}
const operationNumbers = {
    firstNumber: 4,
    secondNumber: 5
};
console.log("Multiplicação:", multiply(operationNumbers));
function checkVariableType(parameter) {
    if (typeof parameter === "number") {
        return `${parameter} é um número.`;
    }
    return `${parameter} não é um número.`;
}
console.log(checkVariableType(5));
function displayArrayElements(array) {
    array.forEach(element => { console.log(`Elemento: ${element}`); });
}
displayArrayElements([1, 2, 3]);
displayArrayElements(["A", "B", "C"]);
class User {
    constructor(name, age, isAdmin, permissions) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
        this.permissions = permissions;
    }
    isAnAdministrator() {
        let message = `${this.name}`;
        if (!this.isAdmin) {
            message += " não";
        }
        message += " é um administrador.";
        console.log(message);
    }
}
const objectClassUser = new User("Vanessa", 39, true, ["Create", "Read", "Update", "Delete"]);
console.log(objectClassUser);
objectClassUser.isAnAdministrator();
class Calc {
    constructor(numbers) {
        this.numbers = numbers;
    }
    sum() {
        console.log("Soma:", this.numbers.firstNumber + this.numbers.secondNumber);
    }
    subtract() {
        console.log("Subtração:", this.numbers.firstNumber - this.numbers.secondNumber);
    }
    multiply() {
        console.log("Multiplicação:", this.numbers.firstNumber * this.numbers.secondNumber);
    }
    divide() {
        console.log("Divisão:", this.numbers.firstNumber / this.numbers.secondNumber);
    }
}
const calculadora = new Calc({ firstNumber: 4, secondNumber: 4 });
calculadora.sum();
calculadora.subtract();
calculadora.multiply();
calculadora.divide();
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`${this.name} está latindo.`);
    }
}
const dog = new Dog("Nina");
dog.eat();
dog.bark();
function baseParams() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.floor((Math.random() * 10) + 1);
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParams(),
    __metadata("design:paramtypes", [String])
], Person);
const person = new Person("Tiago");
console.log(person);
