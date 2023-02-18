import * as React from "react";
import "./Pharmacies.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CustomizedInputBase() {
  const [pharma, setPharma] = useState([]);

  useEffect(() => {
    getPharma();
  }, []);

  const getPharma = async () => {
    const response = await axios.get("http://localhost:4000/api/pharma");
    setPharma(response.data);
  };

  return (
    <div className="app pharmacie">
      <div className="boximg ">
        {pharma.map((carte, index) => {
          return (
            <div className="smallbox">
              <img src={carte.image} alt="pharmacie" />
              <div className="boxspan">
                <span className="texte">
                  <Link to="/Reserve" underline="none">
                    {carte.nom}
                  </Link>
                </span>{" "}
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
