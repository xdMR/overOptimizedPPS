import React from 'react'
import './plan.css'
import { Button } from "../../components";

//deconstruction planData={data},onClick={() => { function() }}
function Plan({ planData: { header, description, price, seats, buttonText, pillows }, onClick }) {
    function pillowsToString(pillows){
        // this is type of data we are building into unordered list
        // pillows:[
        //     {parent:"Parent Content", children:["One", "Two", "Three"]}
        //     {child:"This is content for list item that does not have children"},
        //   ]
        let str ='';
        pillows.map(elm=>{
            if(elm.parent){
                str+=`<div class="pillow"><ul><li> ${elm.parent} <ul>`;
                str+=elm.children.reduce(
                    (accumulator, currentValue) => accumulator + "<li>"+currentValue+"</li>",
                    ""
                  )
                str+="</ul></li></ul></div>";
            }
            else{
                str+='<div class="pillow"><ul><li>'+elm.child+'</li></ul></div>'
            }
        })
        return str
    }


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

                <div style={{paddingTop:"5px"}} dangerouslySetInnerHTML={{ __html: pillowsToString(pillows) }} />
            </div>

        </>
    )
}

export default Plan

