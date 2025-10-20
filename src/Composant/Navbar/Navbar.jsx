import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
 import { ShoppingCart, Search } from 'lucide-react';
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home")

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar">
      <div className="logo-div">
        <Link to='/' ><img src={assets.logomiam} alt="logoentreprise" className="logo"/></Link>
        <h2>Miam <span>Miam.</span></h2>
      </div>
      <ul className="navbar-menu">
        <Link to={'/'} onClick={() => setMenu("home")} className={menu=="home"?"active":""}>Accueil</Link>
        <Link onClick={() => setMenu("menu")} className={menu=="menu"?"active":""}>Menu</Link>
        <Link onClick={() => setMenu("associé")} className={menu=="associé"?"active":""}>Associé</Link>
        <Link onClick={() => setMenu("contact-us")} className={menu=="contact-us"?"active":""}>Contact Us</Link>
      </ul>
      <div className="navbar-right">
        <Search  size={18}  className="logo-item1" />
        <div className="navbar-search-icon">
            <Link to='/cart'><ShoppingCart size={18} className="logo-item" /></Link>
            <div className={getTotalCartAmount() === 0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} >Connexion</button>
      </div>
    </div>
  );
};

export default Navbar;
