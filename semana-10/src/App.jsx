import heroImg from './assets/hero.png'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Card from './components/Card'

function App() {

  const p1 = {
    name: 'Pendrive',
    price: 45000
  }

  return (
    <>
      <Header title='Props y state' />
      <main className='container'>
        <div className="row mt-4">
          <div className="col">
            <Card name={p1.name} price={ p1.price}/>
          </div>
          <div className="col">
            <Card name='Teclado Gamer' price={23000} />
          </div>
          <div className="col">
            <Card name='Mouse' price={15000} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
