class Persona {
    nombre: string = "Lenin"
    edad: number = 0
constructor(nombre:string, edad:number){
this.nombre = nombre
this.edad = edad
}
    saludar(){
    console.log("Hola soy" + this.nombre)
} 
}

let Lista : Persona[] = [
    new Persona ("Luis", 25),
    new Persona ("luis", 25),
    new Persona ("luis", 25),
];

console.log (Lista)