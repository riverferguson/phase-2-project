import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


const Nav = ({handleDarkModeClick, darkMode}) => {

  const buttonContent = darkMode ? "Light Mode" : "Dark Mode"
return (
  <nav className="nav">
  <Link to="/" className="site-title">
  <img className='logo' src={process.env.PUBLIC_URL + "/images/logo.png"} alt='oops'/> Guitar Traders
        </Link>
        <ul>
            <li className='nav-link-wrapper'>
            <Link to="/guitars/cart">🛒Cart </Link>
            </li>

            <li className='nav-link-wrapper'>
            <Link to="/">  Shop </Link>
            </li>

            <li className='nav-link-wrapper'>
            <Link to='/guitars/new'>  Sell </Link>
            </li>

            <li className='nav-link-wrapper'>
            <Link to="/guitars/contact">  Contact Us </Link>
            </li>

            <li className='nav-link-wrapper'>
            <Link to="/guitars/tuner"> Tuner</Link>
            </li>

            <button className='dark-button' onClick={handleDarkModeClick}>{buttonContent}</button>
            
        </ul>
    </nav>
  )
}

export default Nav