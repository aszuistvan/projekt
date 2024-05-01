import { useState, useContext } from "react";
import TermekContext from "../context/TermekContext";

function TermekListaElem({termek}) {
    const[showModal, setShowModal] = useState(false);
    const handleDetailsClick = () => {setShowModal(true);}

    return(
        <div className="card card-compact w-80 bg-white shadow-xl mt-5">
          <figure></figure>
          <div className="card-body">
            <h2 className="card-title">{termek.termek_neve}</h2>
            <p>{termek.termek_ara}FT</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Kosárba helyez</button>
              <button className="btn btn-primary" onClick={handleDetailsClick}>Részletek</button>
            </div>
          </div>
          {/*Innestol a modal van, ovatosan vele mert erzekeny*/}
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded shadow-lg border-2 border-black rounded-lg">
                  <h2 className="text-xl font-bold mb-2">Összetevők</h2>
                  <p className="text-gray-700">{termek.alapanyagok}</p>
                  <button className="mt-4 btn btn-primary" onClick={() => setShowModal(false)}>Bezár</button>
                </div>
              </div>)}
              {/*Eddig volt a modal, remelem nem bantottad meg <3*/}
        </div>
    )
}

export default TermekListaElem;