import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';


const Dashboard = () => {

 const { token, user } = useContext( AuthContext );

  return (
    <main className='container'>
        <h1>Dashboard del usuario { user.email }</h1>
  
       
    </main>
  )
}

export default Dashboard