import heroImg from './assets/hero.png'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Nav from './components/Nav'
import Login from './pages/Login'

function App() {


  return (
    <>
      <Header title='Props y state' />
      <Nav />
      <a href="/contact">Contactos</a>
      <Home />
      <Footer />
    </>
  )
}

export default App
