import React from 'react'
import { useState } from 'react'
import './button.css'

function Button(props) {
    const [cclass,setCclass]= useState("");
    const handleClick=()=>{
      if(!props.boring){
        setCclass("btn-active");
        setTimeout(()=>{setCclass("")},300);
        // time here must be the same as  <transition: transform 300ms> in button.css in class <.btn>
        // we are optimizing for 300ms load time, but we can also use promises from backend to give feedback on this button
        //pair with onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp
      }
    }
  return (
    //onClick those not work because user can clickDown and never let go, in that case class will not be added
    <button style={{maxWidth:"none", width:"100%"}} onClick={props.onClick} onMouseDown={()=>handleClick()} className={`${props.boring ? "btn-boring":"btn"} ${cclass}`}>{props.title}</button>
  )
}

export default Button