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
