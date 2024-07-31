/*
Realizar una clase de nombre "ProductManager", el cual permitirá trabajar con multiples productos. Este debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistecia de archivos. 

La clase debe contar con una variable this.path. el cual se inicializara desde el constructor y debe recibir una ruta a trabajar desde el momento de generar su instancia  
Debe guardar objetos con el siguiente formato 
- id (se debe incrementar automaticamente, no enviarse dedsde el cuerpo)
- title
- description
- price
- thumbnail
- code
-stock

Debe tener un metodo addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id auincrementable y guardarlo en el arreglo(recuerda siempre guardarlo como un array en el archivo) 

Debe tener un metodo de getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato arreglo 

Debe tener un método getProductById, el cual debe recibir un id y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en el formato objeto

Debe tener un metodo de updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo como en un DB), y debe actualizar el producto que tenga ese id en el archivo NO DEBE BORRARSE SU ID

Debe tener un metodo de deleteProduct el cual debe recibir el id y debe eliminar el producto que tenga ese id en el archivo 
 */

const fs = require("fs");

const { v4: uuidv4 } = require("uuid");

class ProductManager {

    constructor(path) {

        this.path = path;

    }

    async addProduct(producto) {

        if (

            !producto.title ||

            !producto.description ||

            !producto.price ||

            !producto.thumbnail ||

            !producto.code ||

            !producto.stock

        ) {

            return console.error("Producto incompleto");

        }

        const productos = await this.getProducts();

        let id = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;

        const nuevoProducto = {

            title: producto.title,

            description: producto.description,

            price: producto.price,

            thumbnail: producto.thumbnail,

            code: producto.code,

            stock: producto.stock,

            id: id,

        };

        productos.push(nuevoProducto);

        await fs.promises.writeFile(

            this.path,

            JSON.stringify(productos, null, 2),

            "utf8"

        );

    }

    async getProducts() {

        try {

            const result = await fs.promises.readFile(this.path, "utf-8");

            return JSON.parse(result);

        } catch (error) {

            return [];

        }

    }

    async getProductById(idProducto) {

        const productos = await this.getProducts();

        const producto = productos.find((p) => p.id === idProducto);

        if (!producto) {

            console.error("Error, el id del producto no existe");

            return null;

        }

        return producto;

    }

    async updateProduct(idProducto, updatedFields) {

        const productoExistente = await this.getProductById(idProducto);

        if (!productoExistente) {

            console.error("Error, el id del producto no existe");

            return;

        }

        const productos = await this.getProducts();

        const index = productos.findIndex((p) => p.id === idProducto);

        productos[index] = { ...productos[index], ...updatedFields };

        await fs.promises.writeFile(this.path, JSON.stringify(productos, null, 2));

    }

    async deleteProduct(idProducto) {

        const productos = await this.getProducts();

        const index = productos.findIndex((p) => p.id === idProducto);

        if (index === -1) {

            console.error("Error: No se encontró el producto");

            return;

        }

        productos.splice(index, 1);

        await fs.promises.writeFile(this.path, JSON.stringify(productos, null, 2));

    }

}

const test = async () => {

    const productsManager = new ProductManager("./productos.json");

    await productsManager.addProduct({

        title: "Remera Oversize",

        description: "Remera color negro",

        price: 20000,

        thumbnail: "Sin imagen",

        code: "AC1257",

        stock: 30,

    });

    const products = await productsManager.getProducts();

    console.log(products);

};

test();
