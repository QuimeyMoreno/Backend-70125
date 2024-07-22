const fs = require("fs"); //Lo que hace el requiere es traer un modulo,  en esta caso modulos nativos. El fs para manejar archivos y crypto para encriptar contraseñas. La palabra reservada es la que esta dentro del require ej: "fs"
const crypto = require("crypto"); //Lo que hace crypto es cifrar contraseñas, darle proteccion extra, solo el servidor lo va a saber

class UserManager {
  constructor(path) {
    //El path es la ruta donde va a estar guardada el archivo de usuarios
    this.path = path;
  }

  async agregarUsuario(usuario) {
    //funcion asyncrina
    if (
      !usuario.nombre ||
      !usuario.apellido ||
      !usuario.password ||
      !usuario.nombreUsuario
    ) {
      //valida q los datos esten completos
      return console.log("Usuario incompleto");
    }

    const { nombre, apellido, password, nombreUsuario } = usuario; //Desestructuro los valores de usuario 
    const usuarios = await this.obtenerUsuarios(); //Aca lo que hago es obtener todos los usuarios 
    const passwordSecurizada = await this.securizarPassword(password);
    const nuevoUsuario = {
      nombre,
      apellido,
      password: passwordSecurizada,
      nombreUsuario,
    };

    usuarios.push(nuevoUsuario);

    //La línea de código toma un objeto o array de objetos usuarios, lo convierte a una cadena de texto JSON, y escribe esa cadena en un archivo ubicado en la ruta especificada por this.path. La operación de escritura es asíncrona, por lo que await se usa para esperar a que se complete antes de continuar con la ejecución del código. La codificación del archivo es UTF-8, lo que asegura que el texto se guarde en un formato de caracteres universalmente compatible.
    await fs.promises.writeFile(this.path, JSON.stringify(usuarios), "utf-8");
  }

  async obtenerUsuarios() {
    try {
      const resultado = await fs.promises.readFile(this.path, "utf-8"); // El await lo usamos porque vamos hacer algo asincrono, como leer un archivo o escribirlo. y el fs.promise.readFile lo que hace es leet el archivo, el formato que utilizamos comunmente es "utf-8"
      const usuarios = JSON.parse(resultado); // lo que hago es tranformar en un json el resultado 
      return usuarios;
    } catch (error) {
      return [];
    }
  }


  //Lo que hace esta funcion es: 
  /*1- Crea un hash que es un algoritmo de encriptacion
    2- Actuaizamos ese hash con el algoritmo que se pase
    3- Y luego la tranformamos en un hexadecimal 
    En resumen, lo que hace esta función es tomar una contraseña como entrada, aplicarle el algoritmo de hash sha256 para convertirla en una representación única y fija en formato hexadecimal, y luego devolver esta representación. Este proceso asegura que la contraseña original no se pueda ver directamente, haciendo que sea más seguro almacenar y manejar la contraseña. */

  async securizarPassword(password) {
    const hash = crypto.createHash("sha256"); // 1
    hash.update(password);// 2
    const passwordSecurizada = hash.digest("hex");// 3
    return passwordSecurizada;// 3
  }


  async validarUsuario(nombreUsuario, password) {
    const users = await this.obtenerUsuarios(); //Aca utilizamos la funcion de obtener usuario 
    const user = users.find((u) => u.nombreUsuario === nombreUsuario); // aca corroboro que el nombre de usuario coincida 
    if (!user) { //Si no existe el usuario... 
      return console.log("El usuario no existe");
    }
    const bdPassword = user.password; //la pass que esta en la base de dato, diferenciarla a la que me pasan aca 
    const passwordSecurizada = await this.securizarPassword(password);
    if (bdPassword === passwordSecurizada) {
      console.log("Logueado correctamente");
    } else {
      console.log("La contraseña es incorrecta");
    }
  }
}


//Aca probamos que User manager funcione
const test = async () => {
  const userManager = new UserManager("./user.json");
  await userManager.agregarUsuario({
    nombre: "Fernando",
    apellido: "Giraudo",
    password: "123456789",
    nombreUsuario: "fergiraudo",
  });

  await userManager.agregarUsuario({
    nombre: "Sergio",
    apellido: "Sosa",
    password: "987654321",
    nombreUsuario: "sersosa",
  });

  console.log("Usuario: fergiraudo contraseña: 123456789: ");
  await userManager.validarUsuario("fergiraudo", "123456789");

  console.log("Usuario: fergiraudo contraseña: hola: ");
  await userManager.validarUsuario("sersosa", "hola");
};

test();
