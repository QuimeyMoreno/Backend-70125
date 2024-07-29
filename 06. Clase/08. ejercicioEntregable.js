/*
Servidores con express

Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.

Se instalarán las dependencias a partir del comando npm install
Se echará a andar el servidor
Se revisará que el archivo YA CUENTE CON AL MENOS DIEZ PRODUCTOS CREADOS al momento de su entrega, es importante para que los tutores no tengan que crear los productos por sí mismos, y así agilizar el proceso de tu evaluación.
Se corroborará que el servidor esté corriendo en el puerto 8080.
Se mandará a llamar desde el navegador a la url http://localhost:8080/products sin query, eso debe devolver todos los 10 productos.
Se mandará a llamar desde el navegador a la url http://localhost:8080/products?limit=5 , eso debe devolver sólo los primeros 5 de los 10 productos.
Se mandará a llamar desde el navegador a la url http://localhost:8080/products/2, eso debe devolver sólo el producto con id=2.
Se mandará a llamar desde el navegador a la url http://localhost:8080/products/34123123, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.
*/

import express from 'express';


const app = express();
const PORT = 8080;
app.use(express.urlencoded({extended:true}));

const products = [
    {id:"1", nombre:"Remera", precio:3000, stock:10},
    {id:"2", nombre:"Jean", precio:2000, stock:9},
    {id:"3", nombre:"Buzo", precio:1000, stock:8},
    {id:"4", nombre:"Campera", precio:4000, stock:7},
    {id:"5", nombre:"Zapatillas", precio:5000, stock:6},
    {id:"6", nombre:"Calzon", precio:6000, stock:5},
    {id:"7", nombre:"Medias", precio:7000, stock:4},
    {id:"8", nombre:"Joggins", precio:8000, stock:3},
    {id:"9", nombre:"Ojotas", precio:9000, stock:2},
    {id:"10", nombre:"Gorra", precio:12000, stock:1}
]


app.get('/products', (req, res) => {
    const limit = req.query.limit;

    if(!limit){
        return res.send({products})
    }
    if (limit > 6) {
        return res.send({error: 'El limite para buscar son 5 productos'});
    }

    const primerosProductos = products.slice(0, limit);
    res.send({primerosProductos});
});


app.get('/products/:id', (req, res) => {
    const productsId = req.params.id
    const product = products.find(producto => producto.id === productsId)
    if(!product){
        return res.send({error: 'Producto no existe'})
    }
    res.send({product});
})

app.listen(PORT, () =>{
    console.log(`Escuchando desde ${PORT}`);
})