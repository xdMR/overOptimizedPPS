import React from 'react'

import { Headline, SliderTeam, Container, Button, Plan } from "../../components";
import './planselection.css'

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


function PlanSelection() {
  const cart = useContext(CartContext);
  const play = () => {
    console.log("this")
    cart.setCart({
      teammembers:cart.cart.teammembers,
      plan: cart.cart.plan,
      gifts: 10
  })
  }

  return (
    <Container>
      <button onClick={() => { console.log(cart.cart) }}>Show CArt</button>
      <Headline title="UX Metrics Your Stakeholders
Can't Ignore " pretitle="Pricing" sendStyle={{ maxWidth: "400px", margin: "0 auto" }} />
      <SliderTeam />
      <Button boring={false} title="Buy" onClick={() => { play() }} />
      <div className="plans" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Plan priceId={"price_1MLYKjCpotfJBdLxeR976tgu"} ></Plan>
        <Plan priceId={"price_1MLYMsCpotfJBdLxCNAu52ft"} ></Plan>
      </div>

    </ Container>
  )
}

export default PlanSelection