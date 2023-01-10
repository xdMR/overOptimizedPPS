import React from 'react'
import './plan.css'
import { Button } from "../../components";

function Plan(props) {
    return (
        <>
            <div className="plan">
                <h2>{props.header}</h2>
                <Button boring={false} onClick={props.onClick} title="Microinteractions" />
            </div>
        </>
    )
}

export default Plan