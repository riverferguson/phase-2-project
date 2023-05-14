import React from 'react'
import { AppBar, CssBaseline, Toolbar, Typography} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
        <>
   {/* <CssBaseline/> */}
   {/* <AppBar position="sticky">
    <Toolbar> */}
        {/* <Typography variant="h6"> */}
          <div className='icon-bar'>
            <a href='https://twitter.com' target="_blank" rel='noreferrer'>
            <TwitterIcon sx={{mr: 2}} />
            </a>
            <a href='https://facebook.com' target="_blank" rel='noreferrer'>
            <FacebookIcon sx={{mr: 2}} />
            </a>
            <a href='https://instagram.com' target="_blank" rel='noreferrer'>
            <InstagramIcon sx={{mr: 2}} />
            </a>
            <a href='https://gmail.com/' target="_blank" rel='noreferrer'>
            <MailOutlineIcon sx={{mr: 2}} />
            </a>
          </div>
          <div>
            Guitar Trader Inc. 
            <a href='#root'>
            <button className="back-button"> Back to Top</button>
            </a>
          </div>
        {/* </Typography> */}
{/* </Toolbar>
   </AppBar> */}
</>
  )
}

export default Footer