// No se puede hacer esto!
// saludar('Sofia');


// Declaramos la funciones
const saludar = (nombre) => {
    return 'Hola ' + nombre;
}

const format = ( texto ) => texto.toUpperCase();

const format2 =  texto => texto.toUpperCase(); 

// Llamamos a la función
const mensaje = saludar('Jonathan');
console.log(  format( mensaje) );


const triple = (n) =>  n*3 

console.log( triple(3) ); // 9
// triple = 4; No se puede!


console.log( triple(4) ); // 12
