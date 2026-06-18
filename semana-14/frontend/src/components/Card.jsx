import React from 'react'
import { Link } from 'react-router-dom'

const Card = ( {id, name, price, pic, onAddCart }  ) => {
  

    const add = () => {
        console.log('Click desde el hijo')
        onAddCart({id, name, price});
    }

    const url = `/detail/${id}`;
  return (
    <div className='card p-2'>
        <img src={pic} alt={name} />
        <h4>  { name }</h4>
        <h5>$ { price }</h5>
        <Link className='btn btn-dark' to={url}>+ </Link>
        
    </div>
  )
}

export default Card