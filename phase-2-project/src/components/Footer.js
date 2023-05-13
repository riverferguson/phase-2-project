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
   <AppBar position="relative">
    <Toolbar>
        <Typography variant="h6">
            <TwitterIcon sx={{mr: 2}} />
            <FacebookIcon sx={{mr: 2}} />
            <InstagramIcon sx={{mr: 2}} />
            <MailOutlineIcon sx={{mr: 2}} />
            Guitar Trader Inc.
        </Typography>
    </Toolbar>
   </AppBar>
   </>
  )
}

export default Footer