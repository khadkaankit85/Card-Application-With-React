/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Card.css'

const Card = (props) => {

  return (
    <div className='card' style={{border:"1px solid white", borderRadius:"6px", width:"200px", height:"350px", color:"white"}}>
      <h4 style={{textAlign:"right", marginRight:'10px'}}>{props.userId}</h4>
      <h5 style={{textAlign:"center"}}>{props.title}</h5>
      <p style={{textAlign:"center"}}>{props.description}</p>
    </div>
  )
}

export default Card
