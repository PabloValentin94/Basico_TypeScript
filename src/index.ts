// Sintaxe básica.

let x: number = 10;

x = 11;

console.log(typeof x);

// Formas de atribuir valor a uma variável: inferência e annotation.

let y = 12; // Inferência (O tipo é definido com base no tipo do dado atribuído.).

let z: number = 13; // Annotation (O tipo é definido antes da atribuição do dado.).

// Tipos: string, boolean, number, etc.

let userName: string = "Pablo"; // Texto.

let userAge: number = 19; // Número.

const isAdmin: boolean = true; // Boleano.

const permissions: string[] = ["Create", "Read", "Update", "Delete"]; // Array/Vetor.

console.log(typeof userName, typeof userAge, typeof isAdmin, typeof permissions);

console.log(permissions);

// Tupla | Tuple (Array com elementos de diferentes tipos.).

const newUser: [string, number, boolean, string[]] = ["Gabriel", 19, false, ["Read"]]; // A ordem de atribuição dos elementos importa.

console.log(newUser);

// Objetos Literais | Object Literals (Objetos com estrutura fixa.).

const objectUser: {name: string, age: number, isAdmin: boolean, permissions: string[]} = {
    name: "Evandro",
    age: 42,
    isAdmin: false,
    permissions: ["Read"]
};

console.log(objectUser);

// Variáveis Flexíveis (O tipo pode mudar.): any e union type.

let camaleon: any = "1"; // Any (Isso não é recomendado, pois vai contra a lógica do TypeScript.).
console.log(camaleon, typeof camaleon);

camaleon = true;
console.log(camaleon, typeof camaleon);

let id: string | number = 1; // Union Type.
console.log(id, typeof id);

id = "9c2e4e56-5e8f-4c90-8d5d-7c0f68e1f3f9";
console.log(id, typeof id);

// Type Alias (Tipos personalizados.):

type custom_type_id = string | number;

let newId: custom_type_id = "7c2e4e56-5e8f-4c90-8d5d-7c0f68e1f3f7"
console.log(newId, typeof newId);

newId = 2;
console.log(newId, typeof newId);

// Enum (Valores que podem ser reutilizados.).

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
    GG = "Extra Grande"
}

const shirt = {
    name: "Camisa Branca",
    size: Size.GG
};

console.log(shirt);

// Tipos Literais | Literal Types (A variavel só pode ter um valor específico atribuído a ela.).

let fixedVariable: "Teste" = "Teste";

console.log(typeof fixedVariable);

// Funções.

function sum(a: number, b: number) : number | void { // A tipagem de parâmetros é obrigatória, a de retorno, opcional.
    if(a + b !== 0) {
        return a + b;
    }
}

console.log("Soma:", sum(2, 2));

function hello(name?: string) : void {
    if(typeof name === "string") {
        console.log(`Olá, ${name}.`);
    } else {
        console.log("Olá");
    }
}

hello();

hello("Pablo Valentin");

// Interfaces em Variáveis (Define uma estrutura que pode ser reaproveitada.).

interface CalcOperationNumbers {
    firstNumber: number;
    secondNumber: number;
}

function subtract(numbers: CalcOperationNumbers) : number {
    return numbers.firstNumber - numbers.secondNumber;
}

console.log("Subtração:", subtract({ firstNumber: 1, secondNumber: 2 }));

function multiply(numbers: CalcOperationNumbers) : number {
    return numbers.firstNumber * numbers.secondNumber;
}

const operationNumbers: CalcOperationNumbers = {
    firstNumber: 4,
    secondNumber: 5
}

console.log("Multiplicação:", multiply(operationNumbers));

// Narrowing (Checagem de tipos.).

function checkVariableType(parameter: number | boolean) : string {
    if(typeof parameter === "number") {
        return `${parameter} é um número.`;
    }

    return `${parameter} não é um número.`;
}

console.log(checkVariableType(5));

// Generics (Amplia o alcance de funções, por exemplo.).

function displayArrayElements<T>(array: T[]) : void { // A função pode ser usada em arrays de qualquer tipo.
    array.forEach(element => { console.log(`Elemento: ${element}`); });
}

displayArrayElements([1, 2, 3]);

displayArrayElements(["A", "B", "C"]);

// Classes.

class User {
    name;
    age;
    isAdmin;
    permissions;

    // Definição dos tipos das propriedades por inferência.
    constructor(name: string, age: number, isAdmin: boolean, permissions: string[]) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
        this.permissions = permissions;
    }

    isAnAdministrator() : void {
        let message: string = `${this.name}`;

        if(!this.isAdmin) {
            message += " não";
        }

        message += " é um administrador.";

        console.log(message);
    }
}

const objectClassUser: User = new User("Vanessa", 39, true, ["Create", "Read", "Update", "Delete"]);

console.log(objectClassUser);

objectClassUser.isAnAdministrator();

// Interfaces em Classes (Define uma estrutura base obrigatória para as classes que a utilizam.).

interface ICalc {
    sum() : void;
    subtract() : void;
    multiply() : void;
    divide() : void;
}

class Calc implements ICalc {
    numbers;

    constructor(numbers: CalcOperationNumbers) {
        this.numbers = numbers
    }

    sum() : void {
        console.log("Soma:", this.numbers.firstNumber + this.numbers.secondNumber);
    }

    subtract() : void {
        console.log("Subtração:", this.numbers.firstNumber - this.numbers.secondNumber);
    }

    multiply() : void {
        console.log("Multiplicação:", this.numbers.firstNumber * this.numbers.secondNumber);
    }

    divide() : void {
        console.log("Divisão:", this.numbers.firstNumber / this.numbers.secondNumber);
    }
}

const calculadora: Calc = new Calc({ firstNumber: 4, secondNumber: 4 });

calculadora.sum();
calculadora.subtract();
calculadora.multiply();
calculadora.divide();

// Herança.

abstract class Animal {
    name;

    constructor(name:string) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} está comendo.`);
    }
}

class Dog extends Animal {
    constructor(name:string) {
        super(name); // Passando parâmetros para o construtor da classe pai.
    }

    bark() {
        console.log(`${this.name} está latindo.`);
    }
}

const dog: Dog = new Dog("Nina");

dog.eat();
dog.bark();

/*

    Decorators (Funções acionadas automaticamente, em um determinado contexto, que alteram a estrutura de algo.).
    Esse é um recurso mais compelxo que exige um estudo mais aprofundado.

*/

function baseParams() {
    return function<T extends {new (...args: any): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.floor((Math.random() * 10) + 1);
            createdAt = new Date();
        }
    }
}

@baseParams() // Os objetos da classe abaixo terão mais duas propriedades, definidas pelo Decorator.
class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const person: Person = new Person("Tiago");

console.log(person);
