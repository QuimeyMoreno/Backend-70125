function suma(val1, val2) { //Funcion clasica

    let suma = val1 + val2;
    return suma;
}


const suma = (val1, val2) =>{ //Funcion flecha 
    let suma = val1 + val2;
    return suma;
}

const suma = (val1, val2) => val1 + val2;  //Las arrow func tiene el return implicito 

resultado = suma(1, 2); // 3
    

// Cuando tiene un solo parametro no es necesario ponerle los parentesis 
const restoUno = val => val - 1

