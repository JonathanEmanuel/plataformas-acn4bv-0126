import heroImg from './assets/hero.png'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'


function App() {


  return (
    <>
      <Header title='Props y state' />
      <Home />
      <Footer />
    </>
  )
}

export default App
