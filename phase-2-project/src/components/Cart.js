import React from 'react'
//import { Link } from 'react-router-dom'
import './Cart.css'
import { useEffect } from 'react';



  const Cart = ({cartItems, deleteGuitar, setCartItems}) => {

    const handlePurchase = () => {
      alert("Congrats on your purchase!")
      cartItems.forEach(item => handleDelete(item));
    }

    const handleDelete = (guitar) => {
      fetch(`http://localhost:3001/cart/${guitar.id}`, {
        method: "DELETE",
      })
      .then(() => deleteGuitar({...guitar, id: guitar.productId}, "cart"))
      }


      useEffect(() => {
        fetch("http://localhost:3001/cart")
          .then((resp) => resp.json())
          .then((cartItems) => setCartItems(cartItems));
      }, [setCartItems]);

    return (
      <div className='cart-div'>
        <h1 className='cart-header'>Cart</h1>
        {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div className="cart" key={index}>
            <img src={item.image} alt={item.make}/>
            <div>Make: {item.make}</div>
            <div>Model: {item.model}</div>
            <div>Price: ${item.price}</div>
            <div>Year: {item.year} </div>
            <button onClick={() => handleDelete(item)}>🗑️</button>
          </div>
        ))
        ) : (
          <div className="empty-cart">Your cart is empty.</div>
        )}
        <button onClick={handlePurchase}>Complete Purchase</button>
      </div>
    );
  };
  export default Cart