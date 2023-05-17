import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, CssBaseline, Toolbar, Typography} from "@mui/material";
import './Nav.css'


const Nav = ({handleDarkModeClick, darkMode}) => {

  const buttonContent = darkMode ? "Light Mode" : "Dark Mode"

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
       <button onClick={handleDarkModeClick}>{buttonContent}</button>
      </Typography>
    </Toolbar>
  </AppBar>
</span>
</>
)
}

export default Nav