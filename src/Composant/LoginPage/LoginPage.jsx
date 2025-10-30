import React, { useState } from "react";
import "./LoginPage.css";
import { assets } from "../../assets/assets";

const LoginPage = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <div className="container-form">
        <div className="right">
            <img src={assets.rest} alt="" srcset="" />
        </div>
        <div className="left">
          <form className="login-popup-container">
            <div className="login-popup-title">
              <h2>{currState}</h2>
              <img
                onClick={() => setShowLogin(false)}
                src={assets.cross_icon}
                alt=""
                srcset=""
              />
            </div>
            <div className="login-popup-inputs">
              {currState === "Login" ? (
                <></>
              ) : (
                <input type="text" placeholder="Insérer votre Nom" required />
              )}
              {currState === "Login" ? (
                <></>
              ) : (
                <input
                  type="text"
                  placeholder="Insérer votre Localisation"
                  required
                />
              )}
              <input type="email" placeholder="Insérer votre mail" required />
              <input
                type="password"
                placeholder="Insérer votre Password"
                required
              />
            </div>
            <button>
              {currState === "Sign Up" ? "Create account" : "Login"}
            </button>
            <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>En continuant, vous acceptez le terme de confidentialité</p>
            </div>
            {currState === "Login" ? (
              <p>
                Créer un nouveau compte ?{" "}
                <span onClick={() => setCurrState("Sign Up")}>Clique ici</span>
              </p>
            ) : (
              <p>
                Avez vous déjà un compte{" "}
                <span onClick={() => setCurrState("Login")}>
                  Coonectez-vous
                </span>{" "}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
