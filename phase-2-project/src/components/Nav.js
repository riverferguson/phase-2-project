import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = ({handleDarkModeClick, darkMode}) => {

  const buttonContent = darkMode ? "Light Mode" : "Dark Mode"
return (
  <nav className="nav">
  <Link to="/" className="site-title">
  LOGO Guitar Traders
        </Link>
        <ul>
            <li>
            <Link to="/"> Shop </Link>
            </li>
            <li>
            <Link to="/guitars/cart">  Cart </Link>
            </li>
            <li>
            <Link to='/guitars/new'>  Sell </Link>
            </li>
            <li>
            <Link to="/guitars/contact">  Contact Us </Link>
            </li>
            <li>
            <Link to="/guitars/tuner">Tuner</Link>
            </li>
            <button onClick={handleDarkModeClick}>{buttonContent}</button>
        </ul>
    </nav>
  )
}

export default Nav