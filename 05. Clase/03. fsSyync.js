const fs = require('fs');

fs.writeFileSync('./ejemplo.txt', 'Hola como estas?', 'utf-8'); // Dentro de los parentesis 1° ponemos el path, es decir donde se almacena, 2° el contenido del archivo y 3° el formato, que siempre es el mismo
if(fs.existsSync('./ejemplo.txt')){ // Aca con existsSync verifico si existe y luego pongno el path './ejemplo.txt' que es donde esta almacenado
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8'); // Aca leo el contenido y dentro de los () pongo el path y el formato 
    console.log(contenido);
    fs.appendFileSync('./ejemplo.txt', ' mas contenido!!', 'utf-8'); // Aca le agrego mas contenido
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);
    fs.unlinkSync('./ejemplo.txt'); //Borra el archivo
}