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
