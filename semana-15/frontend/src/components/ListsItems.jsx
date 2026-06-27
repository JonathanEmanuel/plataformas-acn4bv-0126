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

    <div className='row p-4'>

        {
            products.map(  
                product =>  <div key={  product._id } className='col-4'>
                                <Card className='col-4'
                                        onAddCart={ handlerAdd}
                                        
                                        id={ product._id} 
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