import { Link } from "react-router-dom";
import logo from '../assets/logo_real.jpg';
import background from '../assets/fastfood_background.jpg';

function Main() {
  return(
    <div className="hero min-h-screen pt-2 bg-fill bg-no-repeat" style={{backgroundImage: `url(${background})`}}>
    <div className="hero-content text-center">
      <div className="max-w-md text-lg font-mono">
      <div className="flex-1  items-center">
      <img src={logo} alt="Logo" className="h-44 w-175 object-contain border-none mb-0 object-top pt-0" />
      {/* Nagyobb méret, object-fit, nincs keret, nincs alsó margó */}
        </div>
        <p className="mt-0 mb-5">Üdvözöljük a gyorséttermünk weboldalán. Kattintson a gombra a termékek megtekintéséhez!</p>
        <Link to="/termeklista" className="bg-primary text-black text-sm px-8 py-4 mx-1 rounded font-mono text-2xl font-bold">Termékek</Link>
      </div>
    </div>
  </div>
)
}

export default Main;
