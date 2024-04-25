import { useContext } from "react";
import TermekContext from "../context/TermekContext";
import TermekListaElem from "./TermekListaElem";

function TermekLista() {
    const{termekek} = useContext(TermekContext);

    return(
        <>
        <h1 style={{textAlign: 'left', marginLeft: '50px', paddingTop: '100px', fontSize: '30px'}} className="font-semibold py-4">Ételek</h1>


        <div className=" container mx-auto flex flex-wrap justify-center space-x-0 md:space-x-2 lg:space-x-4 xl:space-x-6 pt-2 pb-10">
            {
                termekek.map((termek,i)=>(<TermekListaElem key={i} termek = {termek}/>))
            }
        </div>
        </>
    )
}

export default TermekLista;