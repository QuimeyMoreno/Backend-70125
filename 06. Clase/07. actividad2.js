import express from 'express';

const app = express();
const PORT = 8080;
app.use(express.urlencoded({extended:true}))

const usuarios = [
    {id:"1", nombre:"Quimey", apellido:"Moreno", gender: "M"},
    {id:"2", nombre:"Carolina", apellido:"Bujosa", gender: "F"},
    {id:"3", nombre:"Martina", apellido:"Villarruel", gender: "F"}
]

app.get('/usuario/:gender', (req, res) =>{
    const genero = req.params.gender;
    if(!genero){
        return res.send({usuarios});
    }
    if(genero.toUpperCase() !== "M" && genero.toUpperCase() !== "F"){
        return res.send({usuarios});
    }
    const usuariosFiltrados = usuarios.filter(usuario => usuario.gender === genero.toUpperCase());
    res.send({usuarios: usuariosFiltrados});

})

app.get('/usuario_query', (req, res) =>{
    const genero = req.query.gender;
    if(!genero){
        return res.send({usuarios});
    }
    if(genero.toUpperCase() !== "M" && genero.toUpperCase() !== "F"){
        return res.send({usuarios});
    }
    const usuariosFiltrados = usuarios.filter(usuario => usuario.gender === genero.toUpperCase());
    res.send({usuarios: usuariosFiltrados});

})

app.listen(PORT, () =>{
    console.log("Escuchando...")
})