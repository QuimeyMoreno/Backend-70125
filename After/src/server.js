const express       = require('express')
const userRouter    = require('./routes/users.router.js') //IMPORTO EL USER ROUTER 
const productRouter = require('./routes/products.router.js') // IMPORTO EL PRODUCT USER 
const logger        = require('morgan') // ESTO ES UN MIDDLEWARE DE TERCEROS
const { uploader } = require('./utils/multer.js') //IMPORTO MULTER
// import express from 'express'

const app = express()
const PORT = 8080
 // dirname()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(__dirname + '/public')) //Aca lo que dice es que el utilice la carpeta public. El /static lo que hace es crear un carpeta virtual para que no sea de facil acceso. Y por ultimo --dirname lo que hace es poner la ruta donde esta alojado el archivo public en tu computadora 
app.use(logger('dev')) // ESTO ES UN MIDDLEWARE DE TERCEROS

app.use(function(req, res, next ){
    console.log('Time: ', Date.now()) //Para que el servidor avance y no quede trabado aca le tengo que poner next()
    next()
})

// endpoint


//multer
app.post('/', uploader.single('myFile'), (req, res)=>{
    res.send('archivo subido')
})
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)


//Middleware manejo de errores 
app.use((error, req, res, next) => {
    console.log(error.stack)
    res.status(500).send('error de server')
})

app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
})