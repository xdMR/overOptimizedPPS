import React from 'react'
import './button.css'
function button(props) {
  return (
    <button  className={`${props.boring ? "btn-boring":"btn"}`}>{props.title}</button>
  )
}

export default button