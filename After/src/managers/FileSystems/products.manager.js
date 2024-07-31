const fs = require('fs');
const path = './dbjson/productsDb.json'

class ProductsManagerFs{
    constructor(){
        this.path = path;
    }

    readProducts = async () => {
        if(fs.existsSync(path)){ // lo que hace este metodo es preguntar si existe este archivo 
            const productsJson = await fs.promises.readFile(path, 'utf-8'); //aca los productos vienen en formato json
            const productsJs = JSON.parse(productsJson); //lo paso a formato js 
            return productsJs;
        }
        return [];
    }

    getProducts   = async () =>{
        const products = await this.readProducts();
        return products;
    }

    getProduct    = async () =>{}

    createProduct = async newProduct =>{
        try {
            const products = await this.readProducts();

            if(products.length === 0 ){
                newProduct.id = 1;
            } else{
                newProduct.id = products[products.length-1].id + 1; //esto es para que cuando eliminemos no se repita id 
            }

            products.push(newProduct)

            // aca lo que hago es sobre escribir mi archivo 
            await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
            
            return newProduct

        } catch (error) {
            console.log(error)
        }
    }

    updateProduct = async () =>{}
    deleteProduct = async () =>{}
}

module.exports = ProductsManagerFs;