//const dividir = (numero1,numero2) => numero1/numero2;

const dividir = (dividendo, divisor) =>{
    return new Promise( (resolve, reject) => {
        if(divisor === 0){
            reject("No se puede dividir por 0")
        }else{
            resolve(dividendo/divisor);
        }
    })
}

dividir(5,2)
/*Programamos el then para recibir cualquier RESOLVE por parte de la promesa, el parametro resultado sera sera el valor que devuelva el resolve de la promesa */
    .then(resultado =>{ 
        return resultado
        console.log(resultado);
    })
/*Programamos el catch para recibir cualquier REJECT/ERROR por parte de la promesa, el parametro error sera el valor que devuelva el reject dentro de la promesa */
    .catch(error => { // en el catch recibo un error 
        console.log(error);
    });