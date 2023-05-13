import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <Link to='/*'>
      <div>404 Page Not Found</div>
    </Link>
    <img src='phase-2-project/src/Images/404error.png' alt="Not Found">

    </img>
    </>
  )
}

export default Error