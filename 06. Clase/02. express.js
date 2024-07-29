import express from 'express';

//La variable app contiene todas las funcionalidades de express
const app = express()

//app.get apertura un "endpoint", el cual indnica al protocolo http que, en la ruta /saludo espera una peticion tipo GET
app.get('/saludo', (req, res)=>{//req = request(peticion) ; res = response (respuesta)
    res.send("Hola desde express");
    //res.den sirve para responder a la peticion con el contenido dentro 
})

//Aca utilizo el app listen para para escuchar el servidor en algun puerto
app.listen(8080, () =>{//8080 es el puerto. Siempre el primer parametro es un puerto y el segundo un callback cls
    console.log("Express desde el puerto 8080");
})

