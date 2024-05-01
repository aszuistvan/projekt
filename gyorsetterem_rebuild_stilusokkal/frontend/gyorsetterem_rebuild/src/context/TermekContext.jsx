import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const TermekContext = createContext();

export const TermekProvider=({children})=>{
    const[termekek, setTermekek] = useState([]);
    const[italok, setItalok] = useState([]);
    const[refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:8000/api/termeklista`)
        .then(res=>res.json())
        .then(termekek=>{setTermekek(termekek);console.log(termekek)})
        .catch(err=>console.log("A termékek fetchelése nem sikerült, hiba:", err));
    }, [refresh]);

    useEffect(()=>{
        fetch(`http://localhost:8000/api/termeklista/italok`)
       .then(res=>res.json())
       .then(italok=>{setItalok(italok);console.log(italok)})
       .catch(err=>console.log("Az italok fetchelése sikertelen. Hiba:", err))
    }, [refresh]);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const backendMuvelet = async(adat, method, url)=>{
        const response = await fetch(url,{
            method: method,
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(adat)
        });
        const valasz = await response.json();
        update();
        console.log(valasz);
    }
    return <TermekContext.Provider value={{termekek, italok, update, backendMuvelet}}>{children}</TermekContext.Provider>
}

export default TermekContext;