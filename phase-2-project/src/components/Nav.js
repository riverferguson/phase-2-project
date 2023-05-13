import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, CssBaseline, Toolbar, Typography} from "@mui/material";

const Nav = () => {
  return (

  <>
<CssBaseline/>
<AppBar position="sticky">
<Toolbar>
  <Typography variant="h6">
       LOGO Guitar Traders
       <div>
            <Link to="/">  Shop</Link>
            <Link to="/guitars/cart">  Cart</Link>
            <Link to='/guitars/new'>  Sell </Link>
            <Link to="/guitars/contact">  Contact Us</Link>
       </div>
  </Typography>
</Toolbar>
</AppBar>
</>
)
}

export default Nav