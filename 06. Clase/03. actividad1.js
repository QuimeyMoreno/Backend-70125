import express from 'express';

const app = express();

app.get('/bienvenida', (req, res) =>{
    res.send(`<h1 style="color:blue;">Bienvenidos a Backend</h1>`);
})

app.get('/usuario', (req, res) =>{
    const usuario = {
        nombre: "Quimey",
        apellido: "Moreno",
        edad: 24,
        email: "quimeymoreno00@gmail.com"
    }
    res.send({usuario})
})

app.listen(8080, () =>{
    console.log("Escuchando desde el puerto 8080");
})