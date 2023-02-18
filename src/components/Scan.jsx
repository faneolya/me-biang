import React from "react";
import { Link } from "react-router-dom";
import ordonnance  from './img/ordonnance.jpg'
import "./Scan.css";

export const Scan = () => {
  return (
    <div className="Scan">
          <h2>Scanner / télécharger <br></br> votre ordonnance</h2>
          <div className="scanner">
          <img src={ordonnance} alt=""></img>
          </div>
        <button className="buttons_tiquet">
          <a className="btn-telecharger" href=""><Link to="/Para">Envoyer</Link></a>
        </button>
    </div>
  );
};
export default Scan;
