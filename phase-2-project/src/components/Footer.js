import React from 'react'
import { AppBar, CssBaseline, Toolbar, Typography} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
        <>
   <CssBaseline/>
   <AppBar position="sticky">
    <Toolbar>
        <Typography variant="h6">
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
            Guitar Trader Inc. 
        </Typography>
    </Toolbar>
   </AppBar>
   </>
  )
}

export default Footer