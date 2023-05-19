import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


const Nav = ({handleDarkModeClick, darkMode}) => {
  // const buttonContent = darkMode ? "Light Mode" : "Dark Mode"
  const sunny = '\u{1F31E}';
  const dark = '\u{1F319}';
  const buttonContent = darkMode ? sunny : dark; 

  return (
    <nav className="nav">
    <Link to="/" className="site-title">
    <img className='logo' src={process.env.PUBLIC_URL + "/images/logo.png"} alt='oops'/> 
    <span className='shop-name'>&nbsp; Guitar Traders</span>
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

              <button className='dark-button' onClick={handleDarkModeClick}><span className='dark-mode-span-button'>{buttonContent}</span></button>
              
          </ul>
      </nav>
    )
}

export default Nav