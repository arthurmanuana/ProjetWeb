import React, { useState } from "react";
import Navbar from "./Composant/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import AFooter from "./Composant/AFooter/AFooter";
import LoginPage from "./Composant/LoginPage/LoginPage";

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin?<LoginPage setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <AFooter />
    </>
  );
};

export default App;
