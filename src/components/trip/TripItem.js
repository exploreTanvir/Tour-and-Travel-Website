import React from 'react'

const TripItem = (props) => {
  return (
    <div className='tripCard'>
        <div className='tripImg'>
            <img alt='trip img' src={props.tripImg}/>
        </div>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default TripItem