import React from 'react'
import './plan.css'
import { Button } from "../../components";

//deconstruction planData={data},onClick={() => { function() }}
function Plan({ planData: { header, description, price, seats, buttonText, pillows }, onClick }) {

    return (
        <>
            <div className="plan">
                <div className="pillow">
                    <h2>{header}</h2>
                    <div className="description">{description}</div>
                </div>
                <div className="pillow"><div className="h3"><strong>${price}</strong> per person</div></div>
                <div className="pillow"><div className="h3">Only<strong> {seats}</strong> left</div></div>

                <div className="pillow">
                    <Button boring={false} onClick={onClick} title={buttonText} />
                </div>

                {/* {pillows.map(elm => {
                    return <div className="pillow">
                       {(elm.parent)? elm.parent+ elm.children.map(ch=><li>{ch}</li>):<ul><li>{elm.child}</li></ul>}
                    </div>
                })} */}
            </div>

        </>
    )
}

export default Plan

