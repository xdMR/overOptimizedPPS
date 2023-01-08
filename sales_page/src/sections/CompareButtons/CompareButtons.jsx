import React from 'react'
import { Button } from "../../components";


function CompareButtons() {
    return (
        <div style={{padding:"80px 30px"}}>
        <Button boring={true} title="Boring" />
            <Button boring={false} title="Microinteractions" />
        </div>
              )
}

export default CompareButtons