import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  const { token, logout } = useContext( AuthContext);
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand"to='/'> Inicio</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' className='nav-link '>Inicio</NavLink>
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>


        {
           token ? (<li className="nav-item">
                    <NavLink onClick={ logout } className='nav-link' >Cerrar Sesión</NavLink>
                  </li>) 
           : (
              <>
                  <li className="nav-item">
                    <NavLink to='/register' className='nav-link'>Registro</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/login' className='nav-link '>Login</NavLink>
                  </li>
              </>

           )
        }

        <li className="nav-item">
          <NavLink to='/contact' className='nav-link '>Contactos</NavLink>

        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav