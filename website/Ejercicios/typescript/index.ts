// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

//string
let nombre: string = "Harold";
let saludo = `Hola, me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
// people.push("9000");

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push("Harold")
peopleAndNumbers.push(9001)

// Enum

enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard"};

let someObject: object = {
  type: "Wildcard",
}