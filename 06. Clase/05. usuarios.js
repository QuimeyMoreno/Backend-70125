import express from 'express';

const app = express();
const PORT = 8080;

const usuarios = [
    {id:"1", nombre:"Quimey", apellido:"Moreno"},
    {id:"2", nombre:"Hernan", apellido:"Moreno"},
    {id:"3", nombre:"Carolina", apellido:"Moreno"}
]


app.get('/', (req, res) => {
    res.send({usuarios})
})

app.get('/usuario/:id', (req, res) => {
    const userId = req.params.id
    const user = usuarios.find(usuario => usuario.id === userId);
    if(!user){
        return res.send({error: 'usuario no encontrado'})
    }
    res.send({user})
})

app.listen(PORT, () =>{
    console.log("Escuchando en 8080");
})