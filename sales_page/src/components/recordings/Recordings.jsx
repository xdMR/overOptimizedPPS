import React from 'react'
import { Button } from "../../components";
import './recordings.css'
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


function Recordings() {
    const cart = useContext(CartContext);

    const plan2 = (priceId, planName, members) => {
        console.log(`This is ${planName}`)
        console.log(cart.cart);
        cart.cart.teammembers=1;
        cart.createOrder(priceId);
      }


  return (
    <div class="m__cta">
    <div class="m__cta-content">
        <h3>Recordings-Only Package</h3>
        <p>9 months of access to the five intensive session recordings
and notes (through Nov 6, 2023).</p>
        <p>Catch the lectures on your own schedule.</p>

    </div>
    <div class="m__cta-btn">
    <Button boring={false} onClick={()=>{plan2("price_1MOueTCpotfJBdLx6CAptVdz","Recordings",1)}} title="Buy Recording Access" />
    </div>
</div>
  )
}

export default Recordings