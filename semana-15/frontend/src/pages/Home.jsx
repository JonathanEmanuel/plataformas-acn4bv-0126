import React from 'react'
import { useEffect, useState } from 'react'
import ListsItems from '../components/ListsItems'


const Home = () => {

  const [ nombre, setNombre] = useState('');
  const [ products, setProducts] = useState([]);


  useEffect( () => {
    const endPoint = 'http://127.0.0.1:5000/api/products'
    fetch(endPoint).then( res => res.json())
    .then( data => {
      console.log(data)
      setProducts( data.data)
    })
    .catch( error => console.error(error));

   }, [] );

  return (
    <main className='container pt-4'>
        <input 
          type="text" 
          value={ nombre }
          onChange={ (e) => setNombre( e.target.value)}
          placeholder='Escribe tu nombre'
          />

        <hr />

        <ListsItems products={products} />
    </main>
  )
}

export default Home