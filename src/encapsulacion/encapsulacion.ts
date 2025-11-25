// Definimos la clase CuentaBancaria
class CuentaBancaria {

    // Declaramos el atributo saldo como privado para protegerlo
    private saldo: number;

    // El constructor inicializa el saldo en 0
    constructor() {
        this.saldo = 0; // Saldo comienza en cero
    }

    // Método para depositar dinero
    depositar(monto: number): void {
        if (monto > 0) { // Verificamos que el monto sea válido
            this.saldo += monto; // Sumamos el monto al saldo
            console.log(`Has depositado $${monto}.`); // Mensaje informativo
        } else {
            console.log("El monto debe ser positivo."); // Error si monto es incorrecto
        }
    }

    // Método para mostrar el saldo actual
    mostrarSaldo(): void {
        console.log(`Saldo actual: $${this.saldo}`); // Mostramos el saldo protegido
    }
}

// Ejemplo de uso de la clase
const cuenta = new CuentaBancaria(); // Creamos una cuenta nueva
cuenta.depositar(100); // Depositamos 100
cuenta.mostrarSaldo(); // Mostramos el saldo
