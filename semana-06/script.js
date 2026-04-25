const h2 = document.querySelector('h2');
const input = document.querySelector('#estudiante');
const form = document.querySelector('form');
const btnClear = document.querySelector('#btn-clear');
const btnGet = document.querySelector('#btn-get');
const listaUL = document.querySelector('#lista');
const photosContainer = document.querySelector('#photos');
const spinner = document.querySelector('.spinner');

const loadingMostrar = () => {
    spinner.classList.remove('oculto');
}

const loadingOcultar = () => {
    spinner.classList.add('oculto');
}

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
btnClear.addEventListener('click', () => {
    console.log('Eliminando LocalStorage');
    localStorage.clear();
})

const guardarStorage = (array) => {
    localStorage.setItem('lista', JSON.stringify( array));
}

const leerStorage = () => {
   const string = localStorage.getItem('lista');
   const datos = JSON.parse( string);
   return datos ? datos : []; 
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

const crearCards = ( array ) => {
    array.forEach(item => {
        //console.log(item);
        photosContainer.innerHTML += 
        `<div class="card">
                <h4>${item.title}</h4>
                <p>${item.body} </p>
        </div>`;
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
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


/*
btnGet.addEventListener('click', () => {
    console.log('GET');
    const endPoint = 'https://jsonplaceholder.typicode.com/posts';
    fetch(endPoint)
        .then( response => {
            console.log(response);
            return response.json();
        })
        .then( data => {
            console.log( data);
        })
        .catch( (error) => {
            console.log(error)
            alert('Ocurrio un error del Servidor')
        } )
    console.log('Fin del GET');
})
*/



btnGet.addEventListener('click', async () => {
    console.log('Cargando...');
    loadingMostrar();
    const endPoint = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(endPoint);
    const data = await response.json();
    //console.log(data);
    crearCards(data);
    console.log('Fin');
    loadingOcultar();
})


const estudiantes = leerStorage();
crearUL( estudiantes);
