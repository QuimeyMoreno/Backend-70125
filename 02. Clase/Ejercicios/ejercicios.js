/*Se creará una instancia de la clase “ProductManager”
Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
Se llamará al método “addProduct” con los campos:
title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25
El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
 */

class ProductManager {
    constructor(){
        this.productos = [];
    }

    getProducts(){
        return this.productos;
    }

    addProduct(title, description, price,code,stock){
        let id_producto = this.productos.length;

        let producto = {
            title: title,
            description: description,
            price: price,
            thumbnail: "Sin imagen",
            code: code,
            stock: stock,
            id: ++id_producto
        }
        this.productos.push(producto);
        return this.productos;
    }

    getProductById(idProducto){
        let producto = this.productos.find(elemento => elemento.id == idProducto);
        if(producto){
            return producto;
        } else{
            return null
        }
    }
}



const productManager = new ProductManager();

productManager.addProduct("Mesa", "Mesa chica", 2000, "a-300", 10);
productManager.addProduct("Silla", "Silla verde", 7000, "b-400", 4);



console.log(productManager.getProducts());
