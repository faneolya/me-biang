import * as React from "react";
import "./Connexion.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

export default function BasicTextFields() {
  return (
    <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Numéro de téléphone"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Mot de passe"/>
				</div>
				<button class="button login__submit">
					<span class="button__text">Connecte-toi</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
  );
}
<div className="connexion-carte">
      <h2>Connexion</h2>
      <h3>Entrez vos identifiants</h3>
      <form className="connexion-form">
        <input
        type="text"
        placeholder="Entrez votre numéro de téléphone"
        />
        <input
        type="password"
        placeholder="Entrez votre mot de passe"
        />

        <FormGroup className="checkbox">
         <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Se souvenir de moi"
          />
        </FormGroup>
        <a href=""> Mot de passe oublié?</a>
        <Link to="/pharmacies"><button>Se connecter</button></Link>
      </form>
    </div>