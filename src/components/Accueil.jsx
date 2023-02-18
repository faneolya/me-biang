import React from 'react' ;
import livreur  from '../assets/livreur.png'
import {Link}  from 'react-router-dom'
import './Accueil.css';



export default function Accueil () {
  return (
    <div>
        <img className='livreur' src={livreur} alt=""></img>
        <Link to="/inscription">
        <a href="#" class="btn">Commençons</a>
        </Link>
    </div>
  )
}
