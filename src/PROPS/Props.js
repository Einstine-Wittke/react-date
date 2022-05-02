import React from 'react'
import './Props.css'
function Props(props) {

  return (
    <>
      <div className="box">
        <div className='container'>
          <img src={props.image} alt="" />
          <p>{props.title}</p>
          <h2>{props.name}</h2>
          <button><a href={props.link}>watch now</a></button>
        </div>
      </div>
    </>
  )
}

export default Props