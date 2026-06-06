import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

/* ----------------------- Importamos los componentes ----------------------- */
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
/* -------------------------- Importamos las vistas ------------------------- */
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Detail from './pages/Detail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {


  return (
    <>
      <Header title='React Router Dom' />
      <Nav />
{/* 
      <Link to="/"> Inicio</Link> |
      <Link to="/contact">Contactos</Link> | 
      <Link to="/login"> Login </Link>
 */}
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/detail/:id' element={ <Detail />} />
        <Route path='*' element={ <NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
