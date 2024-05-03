import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FelhasznaloContext from "../context/FelhasznaloContext";
import regisztracio from '../assets/regisztracio.jpg'

function Regisztracio() {
    const navigate = useNavigate();
    const{adatfelvitel, ujFelhasznalo} = useContext(FelhasznaloContext);
    const{state} = useLocation();

    let method = "POST";
    let url = `http://localhost:8000/api/felhasznalok/regisztracio`;
    let formObj = {};

    if(state != null){
        method = "PATCH";
        const{felhasznalo} = state;
        url = `http://localhost:8000/api/felhasznalok/${felhasznalo.id}`;
        formObj = {
            id: felhasznalo.id,
            vnev: felhasznalo.vnev,
            knev: felhasznalo.knev,
            ir_szam: felhasznalo.ir_szam,
            telepules_neve: felhasznalo.telepules_neve,
            kozterulet_neve: felhasznalo.kozterulet_neve,
            kozterulet_jellege: felhasznalo.kozterulet_jellege,
            hazszam: felhasznalo.hazszam,
            tel_szam: felhasznalo.tel_szam,
            felhasznalo_nev: felhasznalo.felhasznalo_nev,
            jelszo: felhasznalo.jelszo,
            email_cim: felhasznalo.email_cim
        }
    } else {
        formObj = {
            vnev : "",
            knev : "",
            ir_szam : "",
            telepules_neve : "",
            kozterulet_neve : "",
            kozterulet_jellege : "",
            hazszam : "",
            tel_szam : "",
            felhasznalo_nev : "",
            jelszo : "",
            email_cim : ""
        }
    }

    const[formData, setFormData] = useState(formObj);

    const writeFormData = (e) => {
        setFormData((prev)=>({...prev, [e.target.id]: e.target.value}));
    }

    const onSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        adatfelvitel(url, method, formData);
        navigate('/regisztracio');
    }

    return (
      <>
        <div className="registration-container h-screen flex items-center bg-white justify-between mr-0 ">
            <div className="registration-form w-full lg:w-6/12 bg-white text-black rounded-lg lg:block hidden">
              <img src={regisztracio} alt="xd" className="justify-start" />
            </div>
          <div className="registration-form lg:w-1/2 p-5 bg-white text-black rounded-lg text-center">
            <h1 className="text-center mb-5 text-2xl text-logozold font-bold">Fast Restaurant</h1>
            <form method="post" onSubmit={onSubmit}>
              <div className="flex flex-wrap -mx-2 justify-center">
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="vnev" required value={formData.vnev} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4">Vezetéknév</label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="knev" required value={formData.knev} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4">Keresztnév</label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="ir_szam" required value={formData.ir_szam} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4">Irányítószám</label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="telepules_neve" required value={formData.telepules_neve} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4">Település neve</label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="kozterulet_neve" required value={formData.kozterulet_neve} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 ">Közterület neve</label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="kozterulet_jellege" required value={formData.kozterulet_jellege} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 ">Közterület jellege </label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="hazszam" required value={formData.hazszam} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 ">Házszám</label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="tel_szam" required value={formData.tel_szam} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 ">Telefonszám</label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="felhasznalo_nev" required value={formData.felhasznalo_nev} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 ">Felhasználónév</label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="email_cim" required value={formData.email_cim} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 ">Email-cím</label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="jelszo" required value={formData.jelszo} onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 ">Jelszó</label>
              </div>
              <br />
              <div class="relative w-100 lg:w-1/2 px-2 py-1">
                <input type="text" id="jelszo"  onChange={writeFormData} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-logozold bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-logozold dark:border-gray-600 dark:focus:border-logozold focus:outline-none focus:ring-0 focus:border-logozold peer border-2 border-gray-300" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-logozold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-logozold peer-focus:dark:text-logozold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 ">Jelszó újra</label>
              </div>
              </div>
              <br />
              <button type="submit" className="w-full bg-logorozsaszin text-white">Hozz létre egy fiókot</button>
            </form>
            <div className="text-center mt-2">  
              <a href="/" className="text-logorozsaszin">Adatvédelem</a> | <a href="/" className="text-logorozsaszin">Feltételek</a>
            </div>
            <div className="text-center mt-2 text-logozold">
              <span>Már van regisztrált fiókod? <a href="/bejelentkezes" className="text-logorozsaszin">Bejelentkezés</a></span>
            </div>
          </div>
        </div>
        </>
)
}

export default Regisztracio;