import React from 'react'


const Card = ( {id, name, price, pic, onAddCart }  ) => {
  

    const add = () => {
        console.log('Click desde el hijo')
        onAddCart({id, name, price});
    }
  return (
    <div className='card p-2'>
        <img src={pic} alt={name} />
        <h4>  { name }</h4>
        <h5>$ { price }</h5>
        
        <button onClick={ add} type='button' className='btn btn-dark'> + </button>
        
    </div>
  )
}

export default Card