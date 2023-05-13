import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Footer = () => {
  return (
    <div className="footer-main-container">
        <h3>Connect With Us</h3>
        <ul>
            <li>
                <Link to=''>YouTube</Link>
            </li>
            <li>
                <Link to=''>Instagram</Link>
            </li>
            <li>
                <Link to=''>FaceBook</Link>
            </li>
            <li>
                <Link to=''>Twitter</Link>
            </li>
        </ul>
    </div>
  )
}

export default Footer