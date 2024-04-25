import { Link } from "react-router-dom";
import logo from '../assets/logo_real.jpg';
import background from '../assets/fastfood_background.jpg';

function Main() {
  return(
    <div className="hero min-h-screen" style={{paddingTop: '5%', backgroundImage: `url(${background})`, objectFit: 'cover'}}>
    <div className="hero-content text-center">
      <div className="max-w-md" style={{fontSize: '1.5em', fontFamily: 'Courier New'}}>
      <div className="flex-1  items-center">
            <img src={logo} alt="Logo" style={{height: '180px', width: '700px', objectFit: 'contain', border: 'none', marginBottom: '0px', objectPosition: 'top', paddingTop: '0px'}} /> {/* Nagyobb méret, object-fit, nincs keret, nincs alsó margó */}
        </div>
        <p style={{marginTop: '0px', marginBottom: '20px'}}>Üdvözöljük a gyorséttermünk weboldalán. Kattintson a gombra a termékek megtekintéséhez!</p> {/* Increased bottom margin */}
        <Link to="/termeklista" className="btn btn-primary btn-xs mx-1 " style={{fontFamily: 'Courier New', fontSize: '1em', width: '140px', height: '30px', fontWeight: 'normal'}}>Termékek</Link>
      
      </div>
    </div>
  </div>
)
}

export default Main;
