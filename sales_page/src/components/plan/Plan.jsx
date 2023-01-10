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
                <div className="pillow pillowHeader"><svg width="26" height="22" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6582 2.293C13.55 2.2 13.4214 2.12624 13.2799 2.07596C13.1383 2.02568 12.9866 1.99986 12.8333 2H7.00001C6.84679 1.99986 6.69504 2.02568 6.55349 2.07596C6.41194 2.12624 6.28337 2.2 6.17518 2.293L2.67518 5.293C2.56663 5.38571 2.48054 5.4959 2.42188 5.61724C2.36321 5.73857 2.33312 5.86866 2.33334 6V11C2.33334 11.266 2.45584 11.52 2.67518 11.707L14.3418 21.707C14.4499 21.8002 14.5785 21.8741 14.72 21.9246C14.8616 21.9751 15.0134 22.001 15.1667 22.001C15.32 22.001 15.4718 21.9751 15.6133 21.9246C15.7549 21.8741 15.8834 21.8002 15.9915 21.707L25.3248 13.707C25.4333 13.6142 25.5193 13.504 25.578 13.3827C25.6367 13.2614 25.6669 13.1313 25.6669 13C25.6669 12.8687 25.6367 12.7386 25.578 12.6173C25.5193 12.496 25.4333 12.3858 25.3248 12.293L13.6582 2.293V2.293ZM15.1667 19.586L4.66668 10.586V6.414L7.48301 4H12.3503L22.8503 13L15.1667 19.586Z" fill="black"/>
<path d="M9.74517 9.99999C10.8064 9.99999 11.6667 9.26261 11.6667 8.35299C11.6667 7.44338 10.8064 6.70599 9.74517 6.70599C8.68395 6.70599 7.82367 7.44338 7.82367 8.35299C7.82367 9.26261 8.68395 9.99999 9.74517 9.99999Z" fill="black"/>
</svg><div className="h3">
<strong>${price}</strong> per person</div></div>
                <div className="pillow pillowHeader"><svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.2667 8V6C26.2667 4.35 24.5356 3 22.4198 3H9.59715C7.48141 3 5.75034 4.35 5.75034 6V8C3.6346 8 1.90353 9.35 1.90353 11V16C1.90353 17.65 3.6346 19 5.75034 19V20C5.75034 20.55 6.32736 21 7.03261 21C7.73786 21 8.31488 20.55 8.31488 20V19H23.7021V20C23.7021 20.55 24.2791 21 24.9844 21C25.6896 21 26.2667 20.55 26.2667 20V19C28.3824 19 30.1135 17.65 30.1135 16V11C30.1135 9.35 28.3824 8 26.2667 8ZM8.31488 6C8.31488 5.45 8.8919 5 9.59715 5H22.4198C23.1251 5 23.7021 5.45 23.7021 6V8.78C22.9199 9.33 22.4198 10.12 22.4198 11V13H9.59715V11C9.59715 10.12 9.09707 9.33 8.31488 8.78V6ZM27.5489 16C27.5489 16.55 26.9719 17 26.2667 17H5.75034C5.04509 17 4.46807 16.55 4.46807 16V11C4.46807 10.45 5.04509 10 5.75034 10C6.45559 10 7.03261 10.45 7.03261 11V15H24.9844V11C24.9844 10.45 25.5614 10 26.2667 10C26.9719 10 27.5489 10.45 27.5489 11V16Z" fill="black"/>
</svg>
<div className="h3">Only<strong> {seats}</strong> left</div></div>

                <div className="pillow">
                    <Button boring={false} onClick={onClick} title={buttonText} />
                </div>

                <div style={{paddingTop:"5px"}} dangerouslySetInnerHTML={{ __html: pillowsToString(pillows) }} />
            <p className='topbutton'><a href="#plans">box top ↑</a></p>
            </div>

        </>
    )
}

export default Plan

