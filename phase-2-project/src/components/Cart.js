import React from 'react'
//import { Link } from 'react-router-dom'
import './Cart.css'


const handlePurchase = () => {
  alert("Congrats on your purchase!")
 }


  const Cart = ({cartItems}) => {
    return (
      <div className='cart-div'>
        <h2 className='cart-header'>Cart</h2>
        {cartItems.map((item, index) => (
          <div className="cart" key={index}>
            <img src={item.image} alt={item.make}/>
            <div>Make: {item.make}</div>
            <div>Model: {item.model}</div>
            <div>Price: ${item.price}</div>
            <button onClick={handlePurchase}>Complete Purchase</button>
            <button>🗑️</button>
          </div>
        ))}
      </div>
    );
  };
  export default Cart