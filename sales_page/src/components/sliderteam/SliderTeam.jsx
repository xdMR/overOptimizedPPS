import React from 'react';
import { useState } from 'react';
import './sliderteam.css';
import Slider from 'rc-slider';

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


function SliderTeam() {
  const [sliderValue, setSliderValue] = useState(2);
  const cart = useContext(CartContext);
  const heightMarks = {
    1: "just me",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
  };


  // style={{fotnSize:"30px"}}
  return (
    <>
      <h2 style={{ maxWidth: "350px", textAlign: "center", margin: "0 auto", fontSize: "22px", paddingBottom: "20px", paddingTop:"60px" }}>Hey John, how many people are on your team?</h2>
      <div className="teamPricing"> <TeamPricing number={sliderValue}/></div>
      <div className="slider" style={{ width: "250px", height: "100px", display: "block", margin: "0 auto" }}>
        <Slider
          id="slider"
          defaultValue={2}
          min={1}
          max={7}
          step={1}
          style={{ width: "100%" }}
          valueLabelDisplay="auto"
          marks={heightMarks}
          keyboard={true}
          onChange={(value) => {
            setSliderValue(value);
             cart.setCart({
              teammembers:value,
              plan: cart.cart.plan,
              gifts: cart.cart.gifts
          })
          }}
        />
      </div>
    </>
  )
}

function TeamPricing(props) {
  return (
    <>
      {(props.number > 1) ? <>🧑🏿‍🤝‍🧑🏻 Team Pricing [ <span style={{ fontSize: "32px", position:"relative", bottom:"-3px" }}>
       {props.number}
      </span> ] </> : <> 🧍 Individual Pricing [ <span style={{ fontSize: "32px", position:"relative", bottom:"-3px" }}>
       {props.number}
      </span> ]</>}

    </>

  );
}

export default SliderTeam