import express from 'express';

const app = express();
const PORT = 8080;

app.get('/usuario/:nombre', (req, res) =>{
    console.log(req.params.nombre);
    res.send(`Bienvenido ${req.params.nombre}`);
});

app.listen(PORT, () =>{
    console.log(`Escuchando en puerto ${PORT}`)
})