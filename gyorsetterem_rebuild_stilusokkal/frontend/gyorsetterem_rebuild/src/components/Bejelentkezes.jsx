import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FelhasznaloContext from "../context/FelhasznaloContext";
import bejelentkezes_kep from "../assets/bejelentkezes.jpg"

const Bejelentkezes = () => {
    const [email_cim, setEmail] = useState('');
    const [jelszo, setJelszo] = useState('');
    const {bejelentkezes} = useContext(FelhasznaloContext);

    const handleBejelentkezes = (e) => {
        e.preventDefault();
        bejelentkezes(email_cim, jelszo);
    }

    return (
    <>
      <div className="registration-container h-screen flex items-center bg-white justify-between mr-0 ">
      <div className="registration-form w-6/12 pt-9 bg-white text-black rounded-lg">
        <img src={bejelentkezes_kep} alt="xd" className="justify-start" />
      </div>
      <div className="registration-form w-1/2 max-w-none bg-white text-black text-center">
          <h1 className="text-center mb-5 text-5xl text-logozold font-bold">Fast Restaurant</h1>
          <form onSubmit={handleBejelentkezes} className="flex justify-center">
          <div className="flex-col-1 -mx-2 justify-center">
            <div class="relative px-2 py-1">
              <input type="text" id="email_cim" onChange={e=> setEmail(e.target.value)} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
              <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4">Email-cím</label>
            </div>
            <br/>
            <div class="relative px-2 py-1">
              <input type="password" id="jelszo" onChange={e=> setJelszo(e.target.value)} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
              <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-8 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4">Jelszó</label>
              <br />
              <button type="submit" style={{ width: '100%', backgroundColor: '#ef9a95', color: '#fff' }}>Hozz létre egy fiókot</button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px', color: '#488c81'}}>
            <span>Még nem regisztrált? <a href="/regisztracio" style={{ color: '#ef9a95' }}>Regisztráció</a></span>
            </div>
          </div>
          </form>
        </div>
      </div>
    </>
    );
}

export default Bejelentkezes;