import { Link } from "react-router-dom";
import logo from '../assets/logo_real.jpg'; // Importáld a képet
import '../App.css'; // Importáld a CSS fájlt

function Navbar() {
    return (
        <div className="navbar bg-base-200 flex justify-center items-center h-10 fixed w-full top-0 z-50">
            <div className="flex-1 flex justify-center items-center">
                <img src={logo} alt="Logo" className="h-24 w-full object-contain" />
            </div>
            <div className="flex-grow Courier New menu-lg  flex items-center justify-center lg:justify-start">
                <ul className="menu menu-horizontal px-1 text-center lg:text-left flex items-center customLinkContainer">
                    <li><Link to={'/'} class="customLink mx-1">Főoldal</Link></li>
                    <li><Link to={'/termeklista'} class="customLink mx-1">Termékek listája</Link></li>
                    <li><Link to={'/regisztracio'} class="customLink mx-1">Regisztráció</Link></li>
                    <li><Link to={'/bejelentkezes'} class="customLink mx-1">Bejelentkezés</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
