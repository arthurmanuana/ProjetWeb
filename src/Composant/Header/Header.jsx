
import React from 'react';
import './Header.css'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()


    return (
        <div className='header'>
            <div className="left">
                <span>RESTAURANT MIAM MIAM</span>
                <h1>Nous servons <br /> le Meilleur Repas</h1>
                <p>"Laissez-vous conter une histoire où les produits du terroir, choisis avec une passion intacte, se transforment en assiettes généreuses, pour un voyage sensoriel qui commence à la première bouchée et dont la douce nostalgie vous accompagnera bien après le dernier instant."</p>
                <div className="menu-btn">
                    <button className='btnn' >Voir le Menu</button>
                    <button className='btnn' onClick={() => navigate('/promotion')} >Voir les Promotions</button>
                </div>
            </div>
            <div className="right">
                <img src={assets.Nourriture_BACK} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Header;