import React from 'react'
import { useState } from 'react'

const Card = ( { name, price }  ) => {
    // Declaro el obj literal
    const persona = { name1: 'Sofia', dni: 123};
    const { name1, dni } = persona;
    /*
    const decirHOla = () => { console.log('hola')}
    const lista = [ 'uva', 'pera', decirHOla ];
    const [ fruta1, fruta2, fn ] = lista;
    */

    const [ cantidad, setCantidad ] = useState( 0 );

    // let cantidad = 2; --> Pasa a ser un estado
   // const { name, price } = props;
    // const price = props.price;
    // const name = props.name;

    const add = () => {
        let nuevaCantidad = cantidad + 1;
        setCantidad(nuevaCantidad);
    }
  return (
    <div className='card p-2'>
        <h4>  { name }</h4>
        <h5>$ { price }</h5>
        <p> Cantidad 
            <span className='badge text-bg-success'> { cantidad} </span>
        </p>
        
        <button onClick={ add} type='button' className='btn btn-dark'> + </button>
        
    </div>
  )
}

export default Card