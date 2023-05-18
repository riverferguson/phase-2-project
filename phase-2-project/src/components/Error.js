import React from 'react'

const Error = () => {
  return (
    <>
      <div className='file-not-found'>
        <h2>Oops...</h2>
        <img src={process.env.PUBLIC_URL + "/images/error.png"} alt="Not Found"></img>
      </div>
    </>
  )
}

export default Error