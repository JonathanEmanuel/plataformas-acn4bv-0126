import React from 'react'
import { useState } from 'react'
import Card from './Card'
import Cart from './Cart'

const ListsItems = ( { products}) => {
    //const lista = ['teclado', 'mouse', 'monitor'];
    // const modificado = lista.map(  item =>  item.toUpperCase() );
   //const modificado = lista.map(  item =>  <h4> item </h4> );

/*     let arrayAux = [];

    for (let index = 0; index < lista.length; index++) {
        const element = lista[index].toUpperCase();
        arrayAux.push( element)
    }

    console.log(arrayAux); */

    const [ cart, setCart ] = useState([]);
    function handlerAdd(param){
        console.log(param);
        console.log('Agregando al carrito desde el padre')
    }
  return (
    <>
    <Cart lista={cart} />
    <button onClick={ handlerAdd }> add</button>
    <div className='row p-4'>

        {
            products.map(  
                product =>  <div className='col-4'>
                            <Card
                                onAddCart={ handlerAdd}
                                key={  product.id }
                                id={ product.id} 
                                name={ product.name} 
                                price={ product.price} 
                                pic={ product.pic}
                            /> 
                        </div> 
                    )
        }
   

    </div>
    </>

  )
}

export default ListsItems