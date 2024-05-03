import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const FelhasznaloContext = createContext();

export const FelhasznaloProvider=({children})=>{
    const[felhasznalok, setFelhasznalo] = useState([]);
    const[bejelentkezett, setBejelentkezett] = useState(true)
    const[refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    const update = () => {
        setRefresh(prev=>!prev);
    }

    const ujFelhasznalo = (felhasznalo) => {
        setFelhasznalo([...felhasznalok, felhasznalo]);
    }

    const bejelentkezes = async (email, jelszo) => {
        try {
            const response = await fetch(`http://localhost:8000/api/felhasznalok/bejelentkezes`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, jelszo})
            });
            if (!response.ok) {
                throw new Error("HTTP hiba. Státusz:", response.status);
            } else {
                const data = await response.json();
                sessionStorage.setItem('usertoken', data.token);
                setBejelentkezett(true);
                alert("Sikeres bejelentkezés!")
                update();
            }
            
        } catch (error) {
            console.log('A fetch hívás sikertelen: ', error);
        }
    }

    const adatkuldes = async(formData)=>{
        const response = await fetch(`http://localhost:8000/api/felhasznalok/regisztracio`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });
        const valasz = await response.text();
        update();
    }
    

    const adatfelvitel = async(url, method, formData)=>{
        const response = await fetch(url,{
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });
        const valasz = await response.text();
        update();
    }

    useEffect(()=>{
        fetch(`http://localhost:8000/api/felhasznalok/regisztracio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
       .then(res=>res.json())
       .then(felhasznalok=>setFelhasznalo(felhasznalok))
       .catch(err=>console.log(err));
    }, [refresh]);
    

    const backendMuvelet = async(adat, method, url)=>{
        const response = await fetch(url,{
            method: method,
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(adat)
        });
        const valasz = await response.json();
        update();
    }

    return <FelhasznaloContext.Provider value={{felhasznalok, ujFelhasznalo, bejelentkezes, update, adatkuldes, adatfelvitel, backendMuvelet}}>{children}</FelhasznaloContext.Provider>
}

export default FelhasznaloContext;