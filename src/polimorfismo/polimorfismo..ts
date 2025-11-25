// Clase base Animal que servirá como plantilla
class Animal {

    // Método sonar que será sobrescrito por las clases hijas
    sonar(): void {
        console.log("El animal hace un sonido."); // Sonido genérico
    }
}

// Clase Perro que extiende Animal
class Perro extends Animal {

    // Sobrescribimos el método sonar con comportamiento propio
    override sonar(): void {
        console.log("El perro dice: ¡Guau!"); // Sonido específico del perro
    }
}

// Clase Gato que extiende Animal
class Gato extends Animal {

    // Sobrescribimos el método sonar con comportamiento propio
    override sonar(): void {
        console.log("El gato dice: ¡Miau!"); // Sonido específico del gato
    }
}

// Creamos un arreglo que contiene objetos tanto de Perro como de Gato
const animales: Animal[] = [new Perro(), new Gato()];

// Recorremos el arreglo y llamamos al método sonar para cada animal
animales.forEach(a => a.sonar()); // Demuestra el polimorfismo
