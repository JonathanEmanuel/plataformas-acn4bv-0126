import React from 'react'

const Card = ( { name, price }  ) => {

   // const { name, price } = props;
    // const price = props.price;
    // const name = props.name;
  return (
    <div className='card p-2'>
        <h4>  { name }</h4>
        <h3>$ { price }</h3>
        <button type='button' className='btn btn-dark'> + </button>
    </div>
  )
}

export default Card