import React from 'react'
import ListsItems from '../components/ListsItems'
import { products } from '../data/products.js'

const Home = () => {
  return (
    <main className='container pt-4'>
        <ListsItems products={products} />
    </main>
  )
}

export default Home