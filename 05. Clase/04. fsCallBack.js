const fs = require('fs');

fs.writeFile('./ejemploCallback.txt', 'Hola desde callback', (error) => {
    if(error) return console.log("No se pudo escribir el archivo");
    fs.readFile('./ejemploCallback.txt', 'utf-8', (error, resultado) => {
        if(error) return console.log("No se pudo leer el archivo");
        console.log(resultado);
        fs.appendFile('./ejemploCallback.txt', ' Mas contenido', (error => {
            if(error) return console.log("No se pudo actualizar el archivo");
            fs.readFile('./ejemploCallback.txt', 'utf-8', (error, contenido) => {
                if(error) return console.log(error);
                console.log(contenido);
            });
        }))
    });
})