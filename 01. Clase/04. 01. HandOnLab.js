const mostrarLista = (lista) =>{

    if(lista.length === 0){
        return "Lista vacia";
    }
    lista.forEach(elemento => {
        console.log(elemento);
    });

    let cantElementos = lista.length;
    return cantElementos;
}

let lista1 = [1,2,5,88];
let lista2 = [21,52,85,82];
let lista3 = [];

let resultado1 = mostrarLista(lista1); // Aca te va a devolver el arrar [1,2,5,88]
console.log(`El largo de la lista 1 es: ${resultado1}`) // Aca te va a retornar la cantElementos, es decir que resultado1 es 4. 