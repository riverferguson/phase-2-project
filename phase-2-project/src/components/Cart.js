import React from 'react'
//import { Link } from 'react-router-dom'
import './Cart.css'



  const Cart = ({cartItems, deleteGuitar}) => {

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

    return (
      <div className='cart-div'>
        <h1 className='cart-header'>Cart</h1>
        {cartItems.map((item, index) => (
          <div className="cart" key={index}>
            <img src={item.image} alt={item.make}/>
            <div>Make: {item.make}</div>
            <div>Model: {item.model}</div>
            <div>Price: ${item.price}</div>
            <button onClick={() => handleDelete(item)}>🗑️</button>

          </div>
        ))}
        <button onClick={handlePurchase}>Complete Purchase</button>
      </div>
    );
  };
  export default Cart