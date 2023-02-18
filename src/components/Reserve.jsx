import * as React from "react";
import FormControl from "@mui/material/FormControl";
import images from "../assets/images.png";
import pharmacie from "../assets/pharmacie.jpg";
import { Link } from "react-router-dom";
import "./Reserve.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function RowRadioButtonsGroup() {
  const [pharmacie, setPharmacie] = useState([]);

  useEffect(() => {
    getPharmacie();
  }, []);

  const getPharmacie = async () => {
    const response = await axios.get("http://localhost:4000/api/pharmacie");
    setPharmacie(response.data);
  };

  return (
    <FormControl>
      <div className="">
        {pharmacie.map((carte, index) => {
          return (
            <div className="mère">
              <img className="second" src={carte.image} alt="image"></img>
              <div className="reserve">
                <h1>{carte.nom}</h1>
                <div className="infolieu">
                  <i class="fa-solid fa-location-dot"></i>
                  <h4>{carte.lieu}</h4>
                </div>
                <div className="infolieu">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                  <h4>{carte.contact}</h4>
                </div>
              </div>
              <div>
                <carousel>
                  <div className="carousel">
                    <h3>Parapharmacie</h3>
                    <Link to="/Para">
                      <img src={images} alt="image"></img>
                    </Link>
                  </div>
                </carousel>
              </div>
              <div>
                <div className="ordonnance">
                  <p>
                    Vous avez une ordonnance? <br></br> Téléchargez la
                  </p>
                  <Link to="/Scan">
                    <i class="fa-sharp fa-solid fa-circle-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </FormControl>
  );
}

