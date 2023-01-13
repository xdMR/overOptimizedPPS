import React from 'react'
import './recordings.css'
import { Button } from "../../components";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


function Recordings() {
  const cart = useContext(CartContext);

  const pay = (priceId, planName) => {
    console.log(`This is ${planName} plan`)
    cart.cart.teammembers = 1;
    cart.createOrder(priceId, 1);
  }

  return (
    <div className="m__cta">
      <div className="m__cta-content">
        <h3>Recordings-Only Package - $97</h3>
        <p>9 months of access to the five intensive session recordings
          and notes (through Nov 6, 2023).</p>
        <p>Catch the lectures on your own schedule.</p>
      </div>
      <div className="m__cta-btn">
        <Button boring={false} onClick={() => { pay("price_1MPcuyCpotfJBdLxTsTD006j", "Recordings") }} title="Buy Recording Access" />
      </div>
    </div>
  )
}

export default Recordings