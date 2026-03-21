let nombre = "Pepito"; // String
let numero;  // Defino la variable
// Asignamos
numero = 2;  // Number
let empleado =  true; // Boolean

const dni = 123;

// nombre = prompt('Ingresa tu nombre');
// let edad = parseInt( prompt('Cual es tu edad') );
let dolar = +prompt('Valor del Dolar Actual');

console.log(dolar );
console.log(dolar + 2 );

/*
console.log(edad);
console.log(  typeof(edad) );
console.log(  typeof(numero) );
*/
// dni = 2020;   No se puede modificar una constante
console.log('El DNI es: ', dni);
nombre = 100;
nombre = false;

// alert('Hola! ' + nombre );

/* 
alert( numero + '3');
alert(2 + '2');
alert('2' + 2);
 */

let n = 2
if( n == '2'){
    console.log('Son iguales');
} else {
    console.log('Son Distintos');
}
// Operadores Booleanos 
/*
    y  &&
    o  ||   (altGr + 1)
    not !=
    igual ==
    Exactamente igual === 
*/
const usuario = 'admin';
const pass = '123';
if( usuario == 'admin' && pass == '123'  ){
    console.log('Acceso correcto');
} else {
    console.error('No tenes Acceso');

}
