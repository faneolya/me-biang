import * as React from "react";
import "./Para.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { parseJSON } from "date-fns";

export default function CustomizedInputBase() {
  const [parapharmacie, setParapharmacie] = useState([]);

  useEffect(() => {
    getParapharmacie();
  }, []);

  const getParapharmacie = async () => {
    const response = await axios.get("http://localhost:4000/api/parapharmacie");
    setParapharmacie(response.data);
  };

  
  const monPanier = []
  const localpanier = localStorage.setItem('panier', monPanier)

  const handleClick = (item) => {
      monPanier.push (item)

      const localpanier = localStorage.setItem('panier',  JSON.stringify(monPanier))
  }
  return (
    <div className="para">
      <Link to="/Reserve">
        <i class="fa-solid fa-arrow-left-long"></i>
      </Link>
      <Link to="/panier">
      <i class="fa-solid fa-basket-shopping"></i>
      </Link >
      <div className="medoc">
        <p>Médicaments & Parapharmacie</p><b>{monPanier}</b>
      </div>
      <div className="boximg1">
        {parapharmacie.map((carte, index) => {
          return (
            <div>
              <div className="smallbox1">
                <img src={carte.image} alt="pharmacie" />
                  <h3>{carte.nom}</h3>
                  <h3>{carte.infos}</h3>
                  <h4>{carte.description}</h4>
                  <h2>{carte.prix}</h2>
                  <span className="texte1" onClick={() => handleClick(carte)}>
                    <i class="fa-sharp fa-solid fa-cart-plus"></i> Ajouter au
                    panier
                  </span><br></br> 
              </div>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}
