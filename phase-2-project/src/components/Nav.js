import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, CssBaseline, Toolbar, Typography} from "@mui/material";
import './Nav.css'

const Nav = () => {
  return (
  <>
<span>
  <CssBaseline/>
  <AppBar className='appbar' sx={{bgcolor: "green" }} position="sticky">
    <Toolbar>
      <Typography variant="h6">
       Guitar Traders
       <div>
            <Link to="/"> Shop </Link>
            <Link to="/guitars/cart">  Cart </Link>
            <Link to='/guitars/new'>  Sell </Link>
            <Link to="/guitars/contact">  Contact Us </Link>
       </div>
      </Typography>
    </Toolbar>
  </AppBar>
</span>
</>
)
}

export default Nav