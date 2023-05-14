import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'


  const Cart = ({cartItems, guitars}) => {
    return (
      <div className='cart-div'>
        <h2 className='cart-header'>Cart</h2>
        {cartItems.map((item, index) => (
          <div className="cart" key={index}>
            <img src={item.image} alt={item.make}/>
            <div>Make: {item.make}</div>
            <div>Model: {item.model}</div>
            <div>Price: ${item.price}</div>
            {/* Add any other information you want to display */}
          </div>
        ))}
      </div>
    );
  };
  export default Cart
  


  //   return (
  //       <div className='cart-items'>
  //         <div className="cart-item-header">Cart Items</div>
  
  //         {cartItems.length === 0 && (
  //           <div className='cart-items-empty'> No Items are added.</div>
  //         )}
  
  //         <div>
  //           {cartItems.map((guitar) =>(
  //             <div key={guitar.id} className='cart-items-list'>
  //               <img 
  //               className='cart-item-image'
  //               src={guitar.image} 
  //               alt={guitar.name}
  //               />
  //         </div>
  //           ))}
  //       </div>
  //   )
  // 