
import { Children, createContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
const AuthContext = createContext();

const AuthProvider = ( { children}) => {
    const tokenStorage = localStorage.getItem('token');

    const [ token, setToken] = useState(  tokenStorage || '' );
    const [ user, setUser] = useState( tokenStorage ? jwtDecode(tokenStorage) : null );

    const login = (jwt) => {
        // console.log('Login del contexto');
        setToken(jwt);
        localStorage.setItem('token', jwt);
        setUser( jwtDecode(jwt)  );
    }

    const logout = () => {
        setToken('');
        localStorage.removeItem('token');
        setUser( null);
    }

    return (
        <AuthContext.Provider  value={{ token, user, login, logout}}>
            { children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }