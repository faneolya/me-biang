import * as React from "react";
import "./Inscription.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";

export default function BasicTextFields() {
  return (
    <div class="formulaire">
      <div class="inscription">
      <Link to="/connexion"><span class="icon material-symbols-outlined"> arrow_back </span></Link>
      </div>
      <h2>INSCRIPTION</h2><br />
      <div class="textbox">
        <input required spellcheck="false" type="text" placeholder="Nom" />
        <span class="icon material-symbols-outlined"> account_circle </span>
        <span class="asterix">*</span>
      </div>
      <br />
      <div class="textbox">
        <input required spellcheck="false" type="text" placeholder="Prénom" />
        <span class="icon material-symbols-outlined"> account_circle </span>
        <span class="asterix">*</span>
      </div>
      <br />
      <div class="textbox">
        <input
          required
          spellcheck="false"
          type="tel"
          placeholder="Numéro de téléphone"
        />
        <span class="icon material-symbols-outlined">phone_in_talk</span>{" "}
        <span class="asterix">*</span>
      </div>
      <br />
      <div class="textbox">
        <input
          required
          spellcheck="false"
          type="password"
          placeholder="Mot de passe"
        />
        <span class="icon material-symbols-outlined"> lock </span>
        <span class="asterix">*</span>
      </div>
      <br />
      <div class="textbox">
        <input
          required
          spellcheck="false"
          type="password"
          placeholder="Confirmer mot de passe"
        />
        <span class="icon material-symbols-outlined"> lock </span>
        <span class="asterix">*</span>
      </div>
      <br />
      <Link to="/pharmacies"><button>
        <span class="circle" aria-hidden="true">
          <span class="arrow-icon"></span>
        </span>
        <span class="button_text">S'incrire</span>
        </button></Link>
    </div>
  );
}
