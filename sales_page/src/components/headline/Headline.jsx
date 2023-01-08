import React from 'react';
import './headline.css';

function Headline(props) {
  return (
    <div style={props.sendStyle}>
      <h3 className='pretitle' >{props.pretitle}</h3>
      <h2 className='h2_title' >{props.title}</h2>
    </div>
  )
}

export default Headline