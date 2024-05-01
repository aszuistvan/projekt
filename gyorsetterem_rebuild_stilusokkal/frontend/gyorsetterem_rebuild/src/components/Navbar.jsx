import { Link } from "react-router-dom";
import logo from '../assets/logo_real.jpg';
import '../App.css';

function Navbar() {
    return (
        <div className="navbar bg-base-200 flex justify-center items-center h-10 fixed w-full top-0 z-10">
            <div className="flex-none flex justify-center items-center">
                <img src={logo} alt="Logo" className="h-24 object-contain" />
            </div>
            <div className="flex-1 Courier New menu-lg flex items-center justify-end lg:justify-start">
                <ul className="menu menu-horizontal px-1 text-center lg:text-left items-end customLinkContainer"> 
                    {/* Medium-sized dropdown menu */}
                    <li className="lg:hidden dropdown dropdown-end dropdown-hover"> {/* Set background color here */}
                        <input type="checkbox" id="dropdown-toggle" className="dropdown-toggle" />
                        <label htmlFor="dropdown-toggle" className="flex items-center customLink mx-1 cursor-pointer">Menü <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
                        </svg></label>
                        <ul className="dropdown-content">
                            <li className="bg-base-200"><Link to={'/'} className="customLink mx-1">Főoldal</Link></li>
                            <li className="bg-base-200"><Link to={'/termeklista'} className="customLink mx-1">Termékek listája</Link></li>
                            <li className="bg-base-200"><Link to={'/regisztracio'} className="customLink mx-1">Regisztráció</Link></li>
                            <li className="bg-base-200"><Link to={'/bejelentkezes'} className="customLink mx-1">Bejelentkezés</Link></li>
                        </ul>
                    </li>
                    {/* End of medium-sized dropdown menu */}
                    {/* Regular menu items for large screens */}
                    <li className="hidden lg:block"><Link to={'/'} className="customLink mx-1">Főoldal</Link></li>
                    <li className="hidden lg:block"><Link to={'/termeklista'} className="customLink mx-1">Termékek listája</Link></li>
                    <li className="hidden lg:block"><Link to={'/regisztracio'} className="customLink mx-1">Regisztráció</Link></li>
                    <li className="hidden lg:block"><Link to={'/bejelentkezes'} className="customLink mx-1">Bejelentkezés</Link></li>
                    {/* End of regular menu items */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;