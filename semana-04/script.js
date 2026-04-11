const lista = ['uno', 'dos', true, ['a', 'b', 'c']];
// Objetos literales
const persona = {
    nombre: 'Julian',
    email: 'jualian@dv.edu.ar',
    cursos: ['HTML', 'CSS', 'JavaScript']
}

//console.log( persona.nombre );
/*
const titulo = document.getElementsByTagName('h1');
const textoImportante = document.getElementsByClassName('.textImportante');
const textoUnico = document.getElementById('#textoUnico');
*/

const titulo = document.querySelector('h1');
const h2 = document.querySelector('h2');

const textoImportante = document.querySelector('.textImportante');
const textoUnico = document.querySelector('#textoUnico');
// Selector multiple -> Retorna un NodeList
const listaTextos = document.querySelectorAll('.textImportante');

const inputNombre = document.getElementById('inputNombre');

// Modificamos el contenido
titulo.innerText = 'Hola desde JS 🤯';

// Para modificar o obtener el valor usamos .value
inputNombre.value = '-----'

function mostrarNombre (){
    const nombre = inputNombre.value;
    h2.innerText = 'Hola ' + nombre + ' 👋';
}
// 🤯
function limpiarInput(){
    inputNombre.value = '';
    h2.innerText = '';
}

function mostrarIcono(){
    const div = document.querySelector('#icon');
    div.innerHTML= '<img src="users.png"  alt="users"/>'
}