import React from 'react'
import './plan.css'
import { Button } from "../../components";

function Plan() {
    return (
        <>
            <div className="plan">
                <h2>Plan</h2>
                <Button boring={false} title="Microinteractions" />
            </div>
        </>
    )
}

export default Plan