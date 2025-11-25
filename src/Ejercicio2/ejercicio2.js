"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declaración de la clase Persona
class Persona {
    // Atributo nombre
    nombre;
    // Atributo edad
    edad;
    // Constructor de Persona
    constructor(nombre, edad) {
        // Asignar el valor recibido al atributo nombre
        this.nombre = nombre;
        // Asignar el valor recibido al atributo edad
        this.edad = edad;
    }
    // Método para presentar a la persona
    presentarse() {
        console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
    }
}
// Declaración de la clase Estudiante que HEREDA de Persona
class Estudiante extends Persona {
    // Atributo curso
    curso;
    // Constructor de Estudiante
    constructor(nombre, edad, curso) {
        // Llamar al constructor de Persona (super)
        super(nombre, edad);
        // Asignar el curso al atributo de la clase
        this.curso = curso;
    }
    // Método para imprimir el curso
    imprimirCurso() {
        console.log("Estoy en el curso de " + this.curso);
    }
}
//   Crear objetos y probar métodos
// Crear un estudiante llamado Luis, de 20 años, en Programación
const est1 = new Estudiante("Luis", 20, "Programación");
// Crear un estudiante llamado Ana, de 22 años, en Diseño Web
const est2 = new Estudiante("Ana", 22, "Diseño Web");
// Llamar al método presentarse heredado de Persona
est1.presentarse();
// Llamar al nuevo método imprimirCurso
est1.imprimirCurso();
// Repetir con el segundo estudiante
est2.presentarse();
est2.imprimirCurso();
//# sourceMappingURL=ejercicio2.js.map