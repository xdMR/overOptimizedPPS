import React from 'react'

import { Headline, SliderTeam, Container, Plan } from "../../components";
import './planselection.css'

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";




function PlanSelection() {
  const cart = useContext(CartContext);

  const plan = (priceId, planName) => {
    console.log(`This is ${planName}`)
    cart.setCart({
      teammembers:cart.cart.teammembers,
      plan: priceId,
      gifts: 10
  })
    console.log(cart.cart);
    cart.createOrder(priceId);
  }


  return (
    <Container>
      <button onClick={() => { console.log(cart.cart) }}>Show CArt</button>
      <Headline title="UX Metrics Your Stakeholders
Can't Ignore " pretitle="Pricing" sendStyle={{ maxWidth: "400px", margin: "0 auto" }} />
      <SliderTeam />
      {/* <Button boring={false} title="Buy" onClick={() => { play() }} /> */}
      <div className="plans" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Plan header="Regular Plan"  onClick={() => { plan("price_1MLYKjCpotfJBdLxeR976tgu", "REG") }}></Plan>
        <Plan header="VIP Plan"  onClick={() => { plan("price_1MLYMsCpotfJBdLxCNAu52ft","VIP") }}></Plan>
      </div>

    </ Container>
  )
}

export default PlanSelection