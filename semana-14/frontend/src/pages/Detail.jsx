import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const { id }  = useParams();
   
  return (
    <main className='container'>
        <h1>Detalle del Producto { id}</h1>
    </main>
  )
}

export default Detail