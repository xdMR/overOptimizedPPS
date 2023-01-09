import React from 'react'

import { Headline, SliderTeam, Container, Button, Plan } from "../../components";
import './planselection.css'

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


function PlanSelection() {
  const cart = useContext(CartContext);
  const play = () => {
    console.log("this")
  }

  return (
    <Container>
      <button onClick={() => { console.log(cart.cart) }}>Show CArt</button>
      <Headline title="UX Metrics Your Stakeholders
Can't Ignore " pretitle="Pricing" sendStyle={{ maxWidth: "400px", margin: "0 auto" }} />
      <SliderTeam />
      <Button boring={false} title="Buy" onClick={() => { play() }} />
      <div className="plans" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Plan></Plan>
        <Plan></Plan>
      </div>

    </ Container>
  )
}

export default PlanSelection