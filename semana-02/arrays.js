const fn = (n) => n*3
            //0     1     2    3    4     5 
let lista = ['🍎','🍌', '🍇', 12, true, fn, 
                ['Franco', 'Walter', 'Pedro']
            ];

console.log( lista[1]);
// Accedemos a Walter
console.log( lista[6][1]);


lista[3] = '🍐';
lista[7] = '🍉';

lista.push('🍏');

console.table( lista);



let cantidad = lista.length;
console.log('La cantidad de elementos es ' + cantidad);

const personas = ['Sofia', 'Julieta', 'Emanuel', 'Marcelo', 'Jorge', 'Sebastian'];

console.log( personas[0]);
console.log( personas[ personas.length -1 ]);

console.log('----- Recorrido -----');
for(let i=0; i< personas.length; i++){
    console.log( personas[i]);
}
/* console.log( personas[1]);
console.log( personas[2]);
console.log( personas[3]);
console.log( personas[4]);
 */
console.log('----- Recorrido con forEach -----');

//const fn2 = ( p ) => console.log(p) 



personas.forEach( p  => console.log(p) );

personas.forEach(   p  => {
    const nombre = p.toUpperCase()
    console.log(nombre) 
} );

