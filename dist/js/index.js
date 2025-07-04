"use strict";
// Sintaxe básica.
let x = 10;
x = 11;
console.log(typeof x);
// Formas de atribuir valor a uma variável: inferência e annotation.
let y = 12; // Inferência (O tipo é definido com base no tipo do dado atribuído.).
let z = 13; // Annotation (O tipo é definido antes da atribuição do dado.).
// Tipos: string, boolean, number, etc.
let userName = "Pablo"; // Texto.
let userAge = 19; // Número.
const isAdmin = true; // Boleano.
const permissions = ["Create", "Read", "Update", "Delete"]; // Array/Vetor.
console.log(typeof userName, typeof userAge, typeof isAdmin, typeof permissions);
console.log(permissions);
// Tupla | Tuple (Array com elementos de diferentes tipos.).
const newUser = ["Gabriel", 19, false, ["Read"]]; // A ordem de atribuição dos elementos importa.
console.log(newUser);
// Objetos Literais | Object Literals (Objetos com estrutura fixa.).
const objectUser = {
    name: "Evandro",
    age: 42,
    isAdmin: false,
    permissions: ["Read"]
};
console.log(objectUser);
// Variáveis Flexíveis (O tipo pode mudar.): any e union type.
let camaleon = "1"; // Any (Isso não é recomendado, pois vai contra a lógica do TypeScript.).
console.log(camaleon, typeof camaleon);
camaleon = true;
console.log(camaleon, typeof camaleon);
let id = 1; // Union Type.
console.log(id, typeof id);
id = "9c2e4e56-5e8f-4c90-8d5d-7c0f68e1f3f9";
console.log(id, typeof id);
let newId = "7c2e4e56-5e8f-4c90-8d5d-7c0f68e1f3f7";
console.log(newId, typeof newId);
newId = 2;
console.log(newId, typeof newId);
// Enum (Valores que podem ser reutilizados.).
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
// Tipos Literais | Literal Types (A variavel só pode ter um valor específico atribuído a ela.).
let fixedVariable = "Teste";
console.log(typeof fixedVariable);
// Funções.
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
