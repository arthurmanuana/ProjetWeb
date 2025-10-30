import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    promoItems,
    food_list,
    removeFromCart,
    removeFromCartPromo,
    getTotalCartAmount,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="div-fidel">
        <p>de</p>
      </div>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Plats</p>
          <p>Prix</p>
          <p>Quantitté</p>
          <p>Total</p>
          <p>Supprimer</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" srcset="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
        {/*Promo Card */}
        {food_list.map((item, index) => {
          if (promoItems[item._id] > 0) {
            const prixPromo = item.price * 0.8;
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" srcset="" />
                  <p>{item.name}</p>
                  <p>${prixPromo.toFixed(2)}</p>
                  <p>{promoItems[item._id]}</p>
                  <p>${(prixPromo * promoItems[item._id]).toFixed(2)}</p>
                  <p
                    onClick={() => removeFromCartPromo(item._id)}
                    className="cross"
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promotion">
          <div>
            <p>Vous avez un Code Promotionnel </p>
            <div className="cart-promotion-input">
              <input type="text" placeholder="Code PROMO" />
              <button>Envoyer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
