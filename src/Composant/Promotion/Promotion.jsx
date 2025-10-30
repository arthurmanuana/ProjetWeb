import React, { useContext } from "react";
import "./Promotion.css";
import { StoreContext } from "../../Context/StoreContext";

// Page qui gère les Promotions

const Promotion = () => {
  const { food_list, addTocartPromo } = useContext(StoreContext);

  // On filtre les données pour avoir que les plats avec un id égale à 1,2,3
  const promotionItem = food_list.filter(
    (item) => item._id === "1" || item._id === "2" || item._id === "3" || item._id === "4" 
  );

  // Fonction Qui permet de Calculer une Promotion

  const calculPromotion = (prixOriginal) => {
    return (prixOriginal * 0.8).toFixed(2); // une réduction de 20%
  };

  return (
    <div>
      <div className="titre-plat">
        <h2>Plats en Promotion 👌</h2>
        <p>Procurez de superbes Plats avec un prix inhabituels</p>
        <hr />
      </div>

      <div className="promotion-container">
        {/*On parcourt le plats en promotions  */}
        {promotionItem.map((item, index) => {
          const price_promo = calculPromotion(item.price);

          return (
            <div key={index} className="promotion_item">
              {/*Mise en place de l'image*/}
              <div className="left-car">
                <div className="left-car-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <span>-20%</span>
              </div>
              {/*Mise en place de la carte d'information*/}
              <div className="right-card">
                <div className="right-card-t">
                  <h2 className="titre">{item.name}</h2>
                  <p className="des">{item.description}</p>
                  <div className="prix-car">
                    <p className="p-ancien">${item.price}</p>
                    <p className="p-nouveau">${price_promo}</p>
                  </div>
                  <button
                    className="btn"
                    onClick={() => addTocartPromo(item._id)}
                  >
                    Ajouter Au panier
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Promotion;
