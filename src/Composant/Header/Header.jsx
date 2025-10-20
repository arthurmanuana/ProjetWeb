
import React from 'react';
import './Header.css'
import { assets } from '../../assets/assets';

const Header = () => {
    return (
        <div className='header'>
            <div className="left">
                <span>RESTAURANT MIAM MIAM</span>
                <h1>Nous servons <br /> le Meilleur Repas</h1>
                <p>"Laissez-vous conter une histoire où les produits du terroir, choisis avec une passion intacte, se transforment en assiettes généreuses, pour un voyage sensoriel qui commence à la première bouchée et dont la douce nostalgie vous accompagnera bien après le dernier instant."</p>
                <button>Voir le Menu</button>
            </div>
            <div className="right">
                <img src={assets.Nourriture_BACK} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Header;