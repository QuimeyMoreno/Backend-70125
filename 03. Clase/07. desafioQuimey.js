/*
Definir función suma:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos

Definir función resta:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”

Definir una función multiplicación:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
Definir la misma función división utilizada en esta clase.
Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch

*/

const dividir = (dividendo, divisor) =>{
    return new Promise( (resolve, reject) => {
        if(divisor === 0){
            reject("No se puede dividir por 0")
        }else{
            resolve(dividendo/divisor);
        }
    })
}

const suma = (numero1, numero2) =>{
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0){
            reject("Operación inválida");
        } else if (numero1+numero2 < 0){
            reject("La calculadora solo puede devolver valores positivos");
        } else{
            let total = numero1 + numero2;
            resolve(total);
        }
    })
}

const resta = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0){
            reject("Operación inválida");
        }else if (numero1-numero2 < 0){
            reject("La calculadora solo puede devolver valores positivos");
        } else{
            let total = numero1 - numero2;
            resolve(total)
        }
    })
}

const multiplicación = (numero1, numero2) =>{
    return new Promise((resolve, reject) => {
        if(numero1 < 0 || numero2 < 0 ){
            reject('Operacion invalida');
        }
        if(numero1*numero2 < 0){
            reject('La calculadora solo debe devolver valores positivos')
        }
        let resultado = numero1 * numero2;

        resolve(resultado)
    })
}

const calculo =  async () => { //El async lo que hace es avisarle que va a ser asincronico 
    try {
        const resultado = await multiplicación(10,0);
        console.log(resultado);
    } catch (error) { //El catch lo utlizo para encapsular el error 
        console.log("Paso por el error");
        console.log(error);
    }
}

calculo();