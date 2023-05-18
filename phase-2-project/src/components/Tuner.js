import React from 'react'

const Tuner = () => {
  return (
    <div>
        <h1>Click Link Below To Tune Your Guitar!</h1>
        <img src={process.env.PUBLIC_URL + "images/tuner.png"}  alt="Nothing to see here"/>
    </div>
  )
}

export default Tuner