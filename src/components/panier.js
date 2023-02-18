import * as React from "react";
import "./Para.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { parseJSON } from "date-fns";

const Panier = () => {
    const monPanier = JSON.parse(localStorage.getItem("panier"));
      console.log(monPanier);
  return (
    <div className="boximg1">
        {monPanier.map((carte, index) => {
          return (
            <div>
              <div className="smallbox1">
                <img src={carte.image} alt="pharmacie" />
                  <h3>{carte.nom}</h3>
                  <h3>{carte.infos}</h3>
                  <h4>{carte.description}</h4>
                  <h2>{carte.prix}</h2>
                  
              </div>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </div>
  );
};

export default Panier;
