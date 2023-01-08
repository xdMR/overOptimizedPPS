import React from 'react';
import { useState } from 'react';
import './sliderteam.css';
import Slider  from 'rc-slider';


function SliderTeam() {
  const [sliderValue, setSliderValue] = useState(2);
  const heightMarks = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
  };

  return (
    <>
    <h1>{sliderValue}</h1>
        <div className="slider" style={{width:"250px", height:"100px",display:"block"}}>
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
                setSliderValue(value)
              }}

            />
        </div>
    </>
  )
}

export default SliderTeam