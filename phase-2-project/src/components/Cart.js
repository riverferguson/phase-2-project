import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, deleteGuitar, setCartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePurchase = () => {
    alert('Congrats on your purchase!');
    cartItems.forEach(item => handleDelete(item));
  };

  const handleDelete = guitar => {
    fetch(`http://localhost:3001/cart/${guitar.id}`, {
      method: 'DELETE',
    }).then(() => deleteGuitar({ ...guitar, id: guitar.productId }, 'cart'));
  };

  useEffect(() => {
    fetch('http://localhost:3001/cart')
      .then(resp => resp.json())
      .then(cartItems => setCartItems(cartItems));
  }, [setCartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <div className="cart-div">
      <h1 className="cart-header">Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div className="cart" key={index}>
            <img src={item.image} alt={item.make} />
            <div>Make: {item.make}</div>
            <div>Model: {item.model}</div>
            <div>Price: ${item.price}</div>
            <div>Year: {item.year}</div>
            <button className='delete-button' onClick={() => handleDelete(item)}>🗑️</button>
          </div>
        ))
      ) : (
        <div className="empty-cart">
          <p>Your Cart is Empty...... Rock On</p>
          <img 
          className='hand-vector' 
          src={process.env.PUBLIC_URL + "/images/metal-hand-vector.png"} 
          alt="DevilHorn Hand Vector by Vecteezy: https://www.vecteezy.com/free-vector/background"
          >
          </img>
        </div>
      )}
      <div className="total-price">Cart Total: ${totalPrice}</div>
      <button className="purchase-button" onClick={handlePurchase}>Complete Purchase</button>
    </div>
  );
};

export default Cart;