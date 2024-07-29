const http = require('http');

//Creo el server http mediante el creatServer, y le paso una peticion y una respuesta 
const server = http.createServer((req, res)=>{  
    res.end("Mi primer hola mundo desde el backend, re piola"); //Aca envio la respuesta
})

//Aca utilizo el app listen para para escuchar el servidor en algun puerto
server.listen(8080, () =>{ //8080 es el puerto. Siempre el primer parametro es un puerto y el segundo un callback 
    console.log("Listening on port 8080");
})