import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FelhasznaloContext from "../context/FelhasznaloContext";
import bejelentkezes_kep from "../assets/bejelentkezes.jpg";
import background from '../assets/belepesBackground.jpeg';

const Bejelentkezes = () => {
    const [email_cim, setEmail] = useState('');
    const [jelszo, setJelszo] = useState('');
    const { bejelentkezes } = useContext(FelhasznaloContext);

    const handleBejelentkezes = (e) => {
        e.preventDefault();
        bejelentkezes(email_cim, jelszo);
    }

    return (
        <>
            <div className="registration-container h-screen flex items-center bg-white justify-center mr-0 bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
                <div className="registration-form w-50 lg:w-6/12 lg:bg-transparent text-black bg-gray-700 p-8 rounded-lg text-center">
                    <h1 className="text-center mb-5 text-5xl text-logozold font-bold">Fast Restaurant</h1>
                    <form onSubmit={handleBejelentkezes} className="flex justify-center">
                        <div className="flex-col-1 -mx-2 justify-center">
                            <div className="relative px-2 py-1 text-white">
                                <input type="text" id="email_cim" onChange={e => setEmail(e.target.value)} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer border-2 border-white" placeholder=" " />
                                <label htmlFor="floating_outlined" className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-none dark:bg-none px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4">Email-cím</label>
                            </div>
                            <br />
                            <div className="relative px-2 py-1">
                                <input type="password" id="jelszo" onChange={e => setJelszo(e.target.value)} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer border-2 border-white" placeholder=" " />
                                <label htmlFor="floating_outlined" className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-none dark:bg-none px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-8 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4">Jelszó</label>
                                <br />
                                <button type="submit" className="w-full bg-logorozsaszin text-white" >Belépés</button>
                            </div>
                            <div className="text-center mt-5 text-logozold">
                                <span>Még nem regisztrált? <a href="/regisztracio" className="text-logorozsaszin">Regisztráció</a></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Bejelentkezes;