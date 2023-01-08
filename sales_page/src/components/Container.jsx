import React from 'react'

function Container(props) {
  return (
    <div className='container' style={{maxWidth:"65em", margin:"0 auto"}}>{props.children}</div>
  )
}

export default Container