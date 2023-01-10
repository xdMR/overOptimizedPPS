import React, { Children } from 'react'

import { Headline, SliderTeam, Container, Plan } from "../../components";
import './planselection.css'

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";




function PlanSelection() {
  const cart = useContext(CartContext);

  const PlanDataRegular={
    header:"Outcome-Driven UX Metrics Fundamentals Package",
    description:"Best for teams that want to enhance their learning journey with tailored coaching experience. ",
    price:(cart.cart.teammembers>1)?397:447,
    seats:25-cart.cart.teammembers,
    buttonText:"Select Regular",
    pillows:[
      {child:"Five 90-minute live sessions with Jared Spool."},
      {parent:"Parent", children:["One", "Two", "Three"]}
    ]
  }

  const PlanDataVIP={
    header:"Advanced Concepts VIP Package",
    description:"Best for teams that want to enhance their learning journey with tailored coaching experience. ",
    price:(cart.cart.teammembers>1)?597:647,
    seats:185-cart.cart.teammembers,
    buttonText:"Select VIP",
    pillows:[
      "Five 90-minute live sessions with Jared Spool.",
      "Ground-breaking concepts behind:",
      "Your Outcome-Driven UX Metrics Planning Workbook."
    ]
  }

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
      <div className="plans">
        <Plan planData={PlanDataRegular}  onClick={() => { plan("price_1MLYKjCpotfJBdLxeR976tgu", "REG") }}></Plan>
        <Plan planData={PlanDataVIP}  onClick={() => { plan("price_1MLYMsCpotfJBdLxCNAu52ft","VIP") }}></Plan>
      </div>

    </ Container>
  )
}

export default PlanSelection