class Contador{
    constructor(responsable){
        this.responsable = responsable;
        this.conteo = 0;
        Contador.contadorGlobal++;
    }
    static contadorGlobal = 0;
    getResponsable = () =>{
        return this.responsable;
    }
    contar = () =>{
        this.conteo++;
        Contador.contadorGlobal++;
    }
    getConteoIndividual = () =>{
        return this.conteo;
    }
    getContadorGlobal = () => {
        return Contador.contadorGlobal;
    }
}

const julia = new Contador("Julia");// In 0 Gl 1 // In 0 Gl 4
const pedro = new Contador("Pedro");// In 0 Gl 2 //In 1 Gl 3 // In 2 Gl 4

pedro.contar();
pedro.contar(); 

console.log(`Pedro cuenta individual ${pedro.getConteoIndividual()} y global ${pedro.getContadorGlobal()}`);
console.log(`Julia cuenta individual ${julia.getConteoIndividual()} y global ${julia.getContadorGlobal()}`);