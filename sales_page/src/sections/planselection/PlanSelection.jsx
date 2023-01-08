import React from 'react'
import { Headline, SliderTeam, Container } from "../../components";
import './planselection.css'

function PlanSelection() {
  return (
    <Container>
      <Headline title="UX Metrics Your Stakeholders
Can't Ignore " pretitle="Pricing" sendStyle={{ maxWidth: "400px", margin: "0 auto" }} />
      <SliderTeam />

    </ Container>
  )
}

export default PlanSelection