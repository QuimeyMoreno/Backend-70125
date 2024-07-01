const nombre = "Quimey";

//nombre = "Pepe"
//console.log(nombre); Esto da error porque no es reasignable 


const persona = {
    nombre: "Juan", 
    apellido: "Moreno"
}

console.log(persona);
persona.nombre = "Quimey"

console.log(persona); // Esto no da error porque es mutable ya que el valor esta dentro del objeto 