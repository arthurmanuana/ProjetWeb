import React from "react";
import "./Cookspace.css";
import { assets } from "../../assets/assets";
import { ShoppingCart, Medal, Gamepad2, Tag, Calendar, Gift } from "lucide-react";

const Cookspace = () => {
  return (
    <div className="cook">
      <div className="left">
        <img src={assets.cuisinier} alt="" srcset="" />
      </div>
      <div className="right">
        <h1>Plus qu'une offre de services, une expérience unique</h1>
        <p className="para">
          "Ici, nous ne cuisinons pas, nous créons. Nous ne servons pas, nous
          accompagnons. Découvrez un sanctuaire gastronomique où le temps
          suspend son vol et où l'instant présent se savoure comme un grand
          cru."
        </p>
        <div className="boite">
          <div className="boite-icon-left">
            <div className="boite-1">
              <ShoppingCart className="icon-item" />
              <p className="parder">Faites de Commandes Rapide</p>
            </div>
            <div className="boite-1">
              <Gamepad2 className="icon-item" />
              <p className="parder">Joueuez pour gagner</p>
            </div>
            <div className="boite-1">
              <Gift className="icon-item" />
              <p className="parder">Systeme de Parainnage</p>
            </div>
          </div>
          <div className="boite-icon-right">
            <div className="boite-1">
              <Tag className="icon-item" />
              <p className="parder">Participer au Promotion</p>
            </div>
            <div className="boite-1">
              <Calendar className="icon-item" />
              <p className="parder">Participer aux énènement de MIAM MIAM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookspace;
