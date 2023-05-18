import React from 'react'

const Tuner = () => {
  return (
    <div>
        <h1>Click Image Below To Tune Your Guitar!</h1>
        <a href='https://tuner-online.com/' target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL + "/images/tuner.png"} alt="Not Found"/>
        </a>
    </div>
  )
}

export default Tuner