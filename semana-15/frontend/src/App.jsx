import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
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
import Dashboard from './pages/Dashboard'
import ProtectedRouter from './components/ProtectedRouter'
function App() {

  return (
    <>
      <Header title='Context y Protected Router' />
      <Nav />

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/detail/:id' element={ <Detail />} />
        <Route path='/dashboard' element={  
                                          <ProtectedRouter>  
                                            <Dashboard /> 
                                          </ProtectedRouter>  
                                        } />
        <Route path='*' element={ <NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
