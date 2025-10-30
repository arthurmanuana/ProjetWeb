import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null); // Le contexte qui Englobe l'ensemble du Projet(une forme de Magazin)

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [promoItems, setPromoItems] = useState({})

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const addTocartPromo = (itemId) => {
    if (!promoItems[itemId]) {
      setPromoItems((prev) => ({...prev, [itemId]:1}))
    } else {
      setPromoItems((prev) => ({...prev, [itemId]: prev[itemId]+1}))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeFromCartPromo = (itemId) => {
    setPromoItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
  }

  // Fonction qui renvoie la Somme Total de Produits

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    // calcul spécifique pour les promotions
    for(const item in promoItems) {
      if(promoItems[item] > 0){
        let itemInfo = food_list.find((product => product._id === item))
        let prixPromo = (itemInfo.price *0.8)
        totalAmount += Number((prixPromo * promoItems[item]).toFixed(1))
      }
    }
    return totalAmount
  };

  const contextValue = {
    food_list,
    cartItems,
    promoItems,
    setPromoItems,
    addTocartPromo,
    removeFromCartPromo,
    setCartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
