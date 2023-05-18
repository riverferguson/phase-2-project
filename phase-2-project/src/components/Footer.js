import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Footer.css'


const Footer = () => {
  return (
        <>
          <div className='icon-bar' style={{ backgroundColor: '#c14d4d', color: 'white', padding: '25px' }}>
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
            <a href='#root'>
            <button className="back-button" style={{marginLeft: '10px'}}> Back to Top</button>
            </a>
          </div>
        </>
  )
}

export default Footer