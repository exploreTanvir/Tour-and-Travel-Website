import React from 'react'

import "./destination.css"

const DestinationData = (props) => {
  return (
    <>
        <div className={props.cName}>
            <div className="destinationText">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className="destinationImg">
            <img alt="Destination Img" src={props.img1}/>
            <img alt="Destination Img" src={props.img2}/>
        </div>
        </div>
    </>
  )
}

export default DestinationData