import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { MovieCard } from '../components/MovieCard'

import { Footer } from '../components/Footer'

const peliculas = ['Superman', 'Iron man', 'Spiderman'];

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        {
            peliculas.map( p => <li> {p }</li>)
        }
        <MovieCard />


        <Footer />
    </>

  )
}

export default Home