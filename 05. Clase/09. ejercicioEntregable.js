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
Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.
Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
 */

class ProductManager {
  constructor() {
    this.productos = [];
  }

  getProducts() {
    return this.productos;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let id_producto = this.productos.length;

    let producto = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
      id: ++id_producto,
    };
    this.productos.push(producto);
    return this.productos;
  }

  getProductById(idProducto) {
    let producto = this.productos.find((elemento) => elemento.id == idProducto);
    if (producto) {
      return producto;
    } else {
      return null;
    }
  }

  deleteProduct(nombreProducto) {
    let producto = this.productos.find(
      (elemento) => elemento.title == nombreProducto
    );
    if (producto) {
      let index = this.productos.indexOf(producto);
      this.productos.splice(index, 1);
    } else {
      return null;
    }
  }

  updateProduct(id_producto, nPrecio, nStock) {
    let producto = this.getProductById(id_producto);
    if (!producto) {
      return ["El producto no existe"];
    }
    let nuevoProducto = { ...producto };
    nuevoProducto.price = nPrecio;
    nuevoProducto.stock = nStock;
    this.productos.push(nuevoProducto);

    return this.productos;
  }
}


const productManager = new ProductManager();

productManager.addProduct("Guantes Reno","Guantes Reno Azules Senior", 120000, "Sin imagen", "AC450", 5);
productManager.addProduct("Stick AZEMAD", "Stick AZEMAD Special", 90000, "Sin imagen", "AB122", 10);

productManager.updateProduct(2, 130000, 9);


console.log(productManager.getProducts());
