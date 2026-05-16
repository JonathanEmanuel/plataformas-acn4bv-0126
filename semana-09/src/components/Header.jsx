import logo from '../assets/react.svg';

export const Header = () => {

    return (
        <header className='header'>
            <div className="logo-container">
                <img src={logo} alt="logo" />
                <span className='logo-text'> Movie APP</span>
            </div>
            <div className="nav">
                <span> Inicio</span>
                <span> Series</span>
                <span> Favoritos</span>

            </div>  
        </header>
    )
}