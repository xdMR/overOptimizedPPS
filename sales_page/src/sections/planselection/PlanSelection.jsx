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
    header:"Outcome-Driven UX Metrics Fundamentals Package",
    description:"Best for teams that want to enhance their learning journey with tailored coaching experience. ",
    price:(cart.cart.teammembers>1)?397:447,
    seats:25-cart.cart.teammembers,
    buttonText:"Select Regular",
    pillows:[
      {child:"Five 90-minute live sessions with Jared Spool."},
      {parent:"Ground-breaking concepts behind:", children:["UX Outcomes", "UX Success Metrics", "UX Progress Metrics", "Problem-Value Metrics", "Instrumenting Outcome-based UX Measurements"]},
      {child:"Your Outcome-Driven UX Metrics Planning Workbook."},
      {child:"Access to extended resources for developing your UX metrics strategy."},
      {child:"A private community to get your questions answered by Jared and other members."},
      {child:"9 months of access to all session recordings, Q&As, and notes (through Nov 6, 2023)."},
    ]
  }

  const PlanDataVIP={
    header:"Advanced Concepts VIP Package",
    description:"Best for teams that want to enhance their learning journey with tailored coaching experience. ",
    price:(cart.cart.teammembers>1)?597:647,
    seats:185-cart.cart.teammembers,
    buttonText:"Select VIP",
    pillows:[
      {child:"Five 90-minute live sessions with Jared Spool."},
      {parent:"Ground-breaking concepts behind:", children:["UX Outcomes", "UX Success Metrics", "UX Progress Metrics", "Problem-Value Metrics", "Instrumenting Outcome-based UX Measurements"]},
      {child:"Your Outcome-Driven UX Metrics Planning Workbook."},
      {child:"Access to extended resources for developing your UX metrics strategy."},
      {child:"A private community to get your questions answered by Jared and other members."},
      {child:"9 months of access to all session recordings, Q&As, and notes (through Nov 6, 2023)."},

      {parent:"Gain confidence with tailored coaching to:", children:["Create your UX Outcomes", "Identify your team’s target metrics.", "Integrate your UX metrics into organizational goals"]},
      {child:"Three additional 90-minute live sessions. Only for VIP members."},
      {child:"A 60-minute VIP-only Intensive Prep Coaching session with Dr. Leslie Jensen-Inman."},
      {child:"An intimate, private community of only VIP members with Jared and Leslie to get the mentoring you need to be successful."},
    ]
  }

  const plan = (priceId, planName, members) => {
    console.log(`This is ${planName}`)
    cart.setCart({
      teammembers:members,
      plan: priceId,
      gifts: 0
  })
    console.log(cart.cart);
    navigate("/selectteam");
     //cart.createOrder(priceId);
  }


  return (
    <Container>
      <Headline title="UX Metrics Your Stakeholders
Can't Ignore " pretitle="Pricing" sendStyle={{ maxWidth: "400px", margin: "0 auto" }} />
      <SliderTeam />
      {/* <Button boring={false} title="Buy" onClick={() => { play() }} /> */}
      <div className="plans" id='plans'>
        <Plan planData={PlanDataRegular}  onClick={() => { plan("price_1MLYKjCpotfJBdLxeR976tgu", "REG", cart.cart.teammembers) }}></Plan>
        <Plan planData={PlanDataVIP}  onClick={() => { plan("price_1MLYMsCpotfJBdLxCNAu52ft","VIP",cart.cart.teammembers ) }}></Plan>
      </div>


      <Recordings/>

    </ Container>
  )
}

export default PlanSelection