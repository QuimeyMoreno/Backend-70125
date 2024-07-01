class Persona {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    static specie = "humano";

    saludar = () =>{
        console.log(`Hola soy ${this.name}, mucho gusto`);
    }

    getName = () =>{
        console.log(`Me llamo ${this.name}`);
    }

    despedir = () =>{
        console.log(`Chau nos vemos!!`);
    }
}

const quimey = new Persona ("Quimey", "Moreno");
const lucia = new Persona ("Lucia", "Pepito");

quimey.getName(); // Si bien la clase es igual, las variables internas son diferentes
lucia.getName();

lucia.despedir();

console.log(Persona.specie) // Permite acceder al dato porque es una static
console.log(Persona.getName()) // Nos daria un error 

console.log(quimey.name);
console.log(quimey.lastName)