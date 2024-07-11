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

/*
dividir(5,2)
    .then(resultado =>{
        return resultado
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });
*/

const calculo =  async () => { //El async lo que hace es avisarle que va a ser asincronico 
    try {
        const resultado = await dividir(10,5);
        console.log(resultado);
    } catch (error) { //El catch lo utlizo para encapsular el error 
        console.log("Paso por el error");
        console.log(error);
    }
}

calculo();