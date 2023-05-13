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
            <Link to="/guitars">  Search</Link>
            </li>
            <li>
            <Link to="/guitars">  Shop</Link>
            </li>
            <li>
            <Link to="/guitars">  Cart</Link>
            </li>
            <li>
            <Link to='/guitars/new'>  Sell </Link>
            </li>
            <li>
            <Link to="/guitars">  Contact Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav