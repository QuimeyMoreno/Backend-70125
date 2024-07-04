const objetos = [
    {
        manzanas: 3,
        peras:2,
        carne: 1,
        jugos:5,
        dulces:2
    },
    {
        manzanas: 1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
];

const productos = [];

objetos.forEach( elemento => {
    productos.push(...Object.keys(elemento)) /*Aca lo que hago es recorrer el objeto y pushear al array de productos las claves con el object.keys. Con el ... lo que hago es que en vez que me muestre dos arrays por separado para los valores me lo muestre todo junto  */
})

const productosUnicos = productos.reduce((acc,item)=>{ //acc -> array
    if(!acc.includes(item)){  /*Aca lo que hace es con el reduce recorrer el array y chequea si en el acc se repite el item, si es diferente, es decir no se repite, se pushea al array */
        acc.push(item);
    }
    return acc;
}, [])


const cantProductos = [];

objetos.forEach(elemento =>{
    cantProductos.push(...Object.values(elemento))
})

console.log(cantProductos);

//const totalProductos = cantProductos.reduce( function(a,b){ return a + b }, 0)
const totalProductos = cantProductos.reduce( (acc,valor) => { 
    acc =  acc + valor ;
    return acc
}, 0)

console.log(productosUnicos);
console.log(totalProductos);