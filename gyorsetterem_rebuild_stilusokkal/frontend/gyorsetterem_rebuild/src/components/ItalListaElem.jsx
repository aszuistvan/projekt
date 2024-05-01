import { useContext } from "react";
import TermekContext from "../context/TermekContext";

function ItalListaElem({ital}) {

    return(
        <div className="card card-compact w-80 bg-white shadow-xl mt-5">
          <figure></figure>
          <div className="card-body">
            <h2 className="card-title">{ital.termek_neve}</h2>
            <p>{ital.termek_ara}FT</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Kosárba helyez</button>
            </div>
          </div>
        </div>
    )
}

export default ItalListaElem;