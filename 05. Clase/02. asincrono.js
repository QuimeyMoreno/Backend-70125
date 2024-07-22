console.log("Iniciando tarea");

setTimeout(() => {
    console.log("Ejecutando tarea");
}, 3000);

console.log("Finalizar tarea");

let i= 0;
const intervalo = setInterval(() => { //se va ejecutar cada dos segundos, es un bluque infinito 
    i++; 
    console.log("Ejecutando intervalo");
    if(i=== 2){
        clearInterval(intervalo);
    }
}, 2000);