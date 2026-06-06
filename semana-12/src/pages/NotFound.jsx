import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <main className='container notfound'>
        <h1> Página no Encontrada | Error: 404 </h1>
        <Link to='/'> Ir al Inicio</Link>
    </main>
  )
}

export default NotFound