import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [ user, setUser ] = useState({ name: '', email: '', password1: '', password2: ''});
  const navigate = useNavigate();

  const handlerForm = (e) => {
    e.preventDefault();
    console.log(user);

    console.log('Submit');
    // Validaciones
    if(user.name.trim() == ""){
      alert('Complente el nombre');
      return;
    }
    if( !user.email.includes('@') || !user.email.includes('.')){
      alert('Ingrese un Email Valido');
      return;
    }

    if( user.password1 != user.password2) {
        alert('Las contaseñas no coinciden');
        return;
    }

    // Enviar a la API los datos
    localStorage.setItem('user', JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password1
    }));
    navigate('/login');
  }

  const handlerChange = (event) => {
    setUser( {...user, [event.target.name] : event.target.value })
  }
  return (
    <main className='container'>
        <h1>Registro</h1>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
              <form onSubmit={ handlerForm}  className='card p-3'>
                <label htmlFor="name">Nombre</label>
                <input name="name" 
                    value={user.name} 
                    onChange={handlerChange } 
                    type="text" className='form-control mb-2'/>

                <label htmlFor="email">Email</label>
                <input 
                    value={user.email}
                    onChange={handlerChange }
                    name='email' 
                    type="email" className='form-control mb-2'/>

                <label htmlFor="password1">Contraseña</label>
                <input 
                    value={ user.password1}
                    onChange={handlerChange }
                    name='password1' 
                    type="password" className='form-control mb-2' />

                <label htmlFor="password2">Repetir Contraseña</label>
                <input 
                    value={user.password2}
                    onChange={handlerChange }
                    name='password2' 
                    type="password" className='form-control mb-2' />

                <button className='btn btn-dark' type='submit'>Registrarme</button>
              </form>
          </div>
          <div className="col"></div>
        </div>

    </main>
  )
}

export default Register