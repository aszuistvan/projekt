import { useContext } from "react";
import TermekContext from "../context/TermekContext";
import TermekListaElem from "./TermekListaElem";
import ItalListaElem from "../components/ItalListaElem";

function TermekLista() {
  const { termekek, italok } = useContext(TermekContext);

  return (
    <>
      <h1 className="text-center ml-12 pt-24 text-3xl font-semibold py-4">Ételek</h1>


      <div className="container mx-auto flex flex-wrap justify-center space-x-0 md:space-x-2 lg:space-x-4 xl:space-x-6 pt-2 pb-10">
        {
          termekek.map((termek, i) => (<TermekListaElem key={i} termek={termek} />))
        }
      </div>

      <h1 className="text-center ml-12 pt-24 text-3xl font-semibold py-4">Italok</h1>

      <div className="container mx-auto flex flex-wrap justify-center space-x-0 md:space-x-2 lg:space-x-4 xl:space-x-6 pt-2 pb-10">
        {
          italok.map((ital, i) => (<ItalListaElem key={i} ital={ital} />))
        }
      </div>
    </>
  )
}

export default TermekLista;