import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ( {jwt, saveToken}) => {

  const [ user, setUser ] = useState({  email: '', password: ''});
  const [ token, setToken] = useState('');
  const navigate = useNavigate();

  const handlerForm = async (e) => {
    e.preventDefault();
   
    if( !user.email.includes('@') || !user.email.includes('.')){
      alert('Ingrese un Email Valido');
      return;
    }

    if( user.password.trim() == "") {
        alert('Completar la contraseña');
        return;
    }
    // Enviar los datos a la API, la cual verifica usuario y contraseña
    const body = {
            email: user.email,
            password: user.password
          }

    try {
      const endPoint = 'http://127.0.0.1:5000/api/users/login';
      const resp =  await fetch(endPoint, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await resp.json();
      console.log( json);
      if( json.status == "error"){
        alert('Usuario o contraseña invalidos')
        return;
      } else {
        saveToken( json.token)
        setToken(jwt);
      }
    } catch (error) {
      alert('Error del Servidor');
      console.log( error);
    }


/* 
    if( (user.email == userRegister.email) && (user.password == userRegister.password) ){
      navigate('/dashboard');
    } else {
    } */

  }

  const handlerChange = (event) => {
    setUser( {...user, [event.target.name] : event.target.value })
  }

  return (
    <main className='container'>
        <h1>Login</h1>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
              <form onSubmit={ handlerForm}  className='card p-3'>
       
                <label htmlFor="email">Email</label>
                <input 
                    value={user.email}
                    onChange={handlerChange }
                    name='email' 
                    type="email" className='form-control mb-2'/>

                <label htmlFor="password">Contraseña</label>
                <input 
                    value={ user.password}
                    onChange={handlerChange }
                    name='password' 
                    type="password" className='form-control mb-2' />


                <button className='btn btn-dark' type='submit'>Ingresar</button>
              </form>
              <p>{ token}</p>
          </div>
          <div className="col"></div>
        </div>
    </main>
  )
}

export default Login