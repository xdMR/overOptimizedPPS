import React, { Children } from 'react'
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";


import { Headline, SliderTeam, Container, Plan, Recordings } from "../../components";
import './planselection.css'

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



function PlanSelection() {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const PlanDataRegular={
    header:"Fundamentals Package",
    description:"Best for teams that want to want to quickly acquire fundamentals and start applying them in their projects. ",
    price:(cart.cart.teammembers>1)?429:699,
    seats:105-cart.cart.teammembers,
    buttonText:"Select Fundamental",
    pillows:[
      {child:"Self-paced course with Q&A Session"},
      {parent:"Guided exercises for building your own:", children:["Strategy Plan ", "Excellence checklist", "Accountability check system"]},
      {child:"5 mentor sessions/mock design exercises."},
      {child:"Access to extended resources for developing your UX metrics strategy."},
      {child:"Access to resources for developing your strategy projects"},
      {child:"100% money-back guarantee after you attended all session and finished all exercises"},
      {child:"6 months of access to all recordings, resources Q&As sessions"},
    ]
  }
  const PlanDataVIP={
    header:"Advanced Concepts VIP Package",
    description:"Best for teams that want to enhance their learning journey with tailored coaching experience. ",
    price:(cart.cart.teammembers>1)?799:999,
    seats:15-cart.cart.teammembers,
    buttonText:"Select VIP",
    pillows:[
      {child:"Instructor-led live course with Q&A Sessions"},
      {parent:"Guided exercises for building your own:", children:["Strategy Plan ", "Excellence checklist", "Accountability check system"]},
      {child:"5 mentor sessions/mock design exercises."},
      {child:"Access to extended resources for developing your UX metrics strategy."},
      {child:"Access to resources for developing your strategy projects."},
      {child:"100% money-back guarantee with no stringsattached."},
      {child:"12 months of access to all recordings, resources Q&As sessions"},

      {child:"2 Designers and 1 coder joins your weekly meetings."},
      {child:"Access to our own professional resources."},
      {child:"Attend our own strategy planning and design sessions."},
    ]
  }

  const selectPlan = (priceId, planName, members) => {
    console.log(`This is ${planName}`)
    cart.setCart({
      teammembers:members,
      package: planName,
      plan: priceId,
      gifts: 0
  })
    // console.log(cart.cart);
    setTimeout(() => {
      navigate("/selectteam");
    }, 250)
     //cart.createOrder(priceId);
  }


  return (
    <Container>
      <Headline title="Stellar Strategy for
Visionary Teams " pretitle="Pricing" sendStyle={{ maxWidth: "400px", margin: "0 auto" }} />
      <SliderTeam />
      <div className="plans" id='plans'>
        <Plan planData={PlanDataRegular}  onClick={() => { selectPlan("price_1MLYKjCpotfJBdLxeR976tgu", "REG", cart.cart.teammembers) }}></Plan>
        <Plan planData={PlanDataVIP}  onClick={() => { selectPlan("price_1MLYMsCpotfJBdLxCNAu52ft","VIP",cart.cart.teammembers ) }}></Plan>
      </div>
      <Recordings/>
    </ Container>
  )
}

export default PlanSelection