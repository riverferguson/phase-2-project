import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-us'>
      <h2>Contact Us</h2>
      <h3>Customer Support:</h3>
      <p> 
        For any assistance or questions regarding your order, product inquiries, or general support, our customer support team is ready to help. You can reach us by:
      </p>
      <ul className='contact-info'>
        <li>Email: Guitartrader@yopmail.com </li>
        <li>Phone: 412-986-7677</li>
      </ul>
      <p>
        We welcome collaborations and partnerships that align with our mission of providing exceptional musical instruments to our customers.
      </p>
      <h3>Address:</h3>
      <p>
        Guitar Trader Inc.
        <br />
        333 Guitar Street
        <br />
        Tallahase, TN, 90768
        <br />
        United States
      </p>
    </div>
  )
}

export default Contact