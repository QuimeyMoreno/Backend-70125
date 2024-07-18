//PROYECTO NODE

const generarNumeroAleatorio = (cantidad) => {
    const numeros = [];
    for(let i=0; i < cantidad; i++){
        const numeroAletorio = Math.floor(Math.random() * 20) + 1; //Lo que hace es generar el numero aleatorio desde 1 hasta 20
        numeros.push(numeroAletorio); //Luego pushe el numero aleatorio a el array de numeros 
    }
    return numeros;
} 

function contarFrecuenciaNumero(numeros) {
    return new Promise((resolve, reject) => {
        const frecuencia = {};
        for(const numero of numeros){ // recorre los numeros del objeto
            if(frecuencia[numero]){
                frecuencia[numero]++; //Si ese numero ya existe dentro del  objeto le sumo la frecuencia 
            }
            else{
                frecuencia[numero] = 1;
            }
        }
        resolve(frecuencia);
    });
}

const cantidadNumerosAleatorios = 10000;

const numeros = generarNumeroAleatorio(cantidadNumerosAleatorios);//es el valor que va a tomar "cantidad en generar numero aleatorio"

console.log('Los numeros aleatoreos se generaron');

contarFrecuenciaNumero(numeros).then(result => {
    console.log(result); //Capturo el resultado de la promesa de la funcnion contarFrecuenciaNumero
})