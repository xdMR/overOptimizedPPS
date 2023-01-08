import React from 'react'
import { Button } from "../../components";


function CompareButtons() {
    return (
        <div style={{padding:"50px 10px"}}>
        <Button boring={true} title="Boring" />
            <Button boring={false} title="Microinteractions" />
        </div>
              )
}

export default CompareButtons