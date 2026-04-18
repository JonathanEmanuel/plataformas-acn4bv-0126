const h2 = document.querySelector('h2');
const input = document.querySelector('#estudiante');
const btn = document.querySelector('button');
const listaUL = document.querySelector('#lista');


const eliminar = ( elemento) => {
    const li = elemento.target.parentElement;
    li.remove();
}

const actualizar = ( element) => {
    element.target.classList.add('completed')
}

h2.innerText = 'Persistencia de Datos';

// Leemos el localStorage
//const alumno = localStorage.getItem('Estudiante')
//h2.innerText = `Hola ${alumno} 👋`;

const guardarStorage = (array) => {
    localStorage.setItem('lista', JSON.stringify( array));
}

const leerStorage = () => {
   const string = localStorage.getItem('lista');
   const datos = JSON.parse( string);
   return datos;
}

const crearUL = ( array) => {
    // Limpiamos el contenedor
    listaUL.innerHTML = '';

    for (let index = 0; index < array.length; index++) {
        const estudiante = array[index];

        const li = document.createElement('li');
        const i = document.createElement('i');
        li.addEventListener('click', actualizar);
        i.addEventListener('click', eliminar);
        
        i.classList.add('fa-solid');
        i.classList.add('fa-trash');

        li.innerText = estudiante;
        li.appendChild(i);

        listaUL.appendChild( li);
        
    }
}

btn.addEventListener('click', () => {
    const nombre = input.value.trim();
    if( nombre == ''){
        return;
    }
    input.value = '';
    
    estudiantes.push(nombre);
    guardarStorage( estudiantes);
    //localStorage.setItem('Estudiante', nombre);

    // template string 
   // lista.innerHTML += `<li> ${nombre} <i class="fa-solid fa-trash"></i> </li>`;
    crearUL( estudiantes);

});

const estudiantes = leerStorage();
crearUL( estudiantes);
