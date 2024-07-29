import express from 'express';

const app = express();
const PORT = 8080;
app.use(express.urlencoded({extended:true}))


app.get('/queries', (req, res) => {
    const queries = req.query;
    res.send(queries);
})

app.listen(PORT, () =>{
    console.log("Escuchando 8080");
})