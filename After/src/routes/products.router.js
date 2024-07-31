const { Router } = require('express')
const ProductsManagerFs = require('../managers/FileSystems/products.manager')
// import { Router }  from 'express'

const router = Router()

// configuración

const productsManagerFs = new ProductsManagerFs()

router.get('/', async (req, res)=>{
    try {
        const productsDb = await productsManagerFs.getProduct();
        res.send({status: 'succes', data: productsDb});
        
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const { body } = req;
        const response = await productsManagerFs.createProduct();
        res.send({status:'succes', data: response})
    } catch (error) {
        console.log(error)
    }
})


module.exports = router
// export default router
// export router