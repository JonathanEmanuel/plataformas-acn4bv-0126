import React from 'react'
import { useState } from 'react'
import Card from './Card'
import Cart from './Cart'

const ListsItems = ( { products}) => {


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