import React from 'react'
import './button.css'
function button(props) {
  return (
    <button className='btn'>{props.title}</button>
  )
}

export default button