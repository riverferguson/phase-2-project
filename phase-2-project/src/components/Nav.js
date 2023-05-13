import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Nav = () => {
  return (
    <nav className="nav">
        <Link to="/" className="site-title">
       LOGO Guitar Traders
        </Link>
        <ul>
            <li>
            <Link to="/projects">  Search</Link>
            </li>
            <li>
            <Link to="/projects">  Shop</Link>
            </li>
            <li>
            <Link to="/projects">  Cart</Link>
            </li>
            <li>
            <Link to="/projects">  Sell </Link>
            </li>
            <li>
            <Link to="/projects">  Contact Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav