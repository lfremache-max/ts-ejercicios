"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    nombre = "Lenin";
    edad = 0;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log("Hola soy" + this.nombre);
    }
}
let Lista = [
    new Persona("Luis", 25),
    new Persona("luis", 25),
    new Persona("luis", 25),
];
console.log(Lista);
//# sourceMappingURL=ejercicio1.js.map