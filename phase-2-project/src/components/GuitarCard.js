import React from 'react'
import './GuitarCard.css'

const GuitarCard = ({guitar, deleteGuitar,setCartItems, addCartItem}) => {
const {make, model, year, image, price, id} = guitar

    

const handleDelete = () => {
fetch(`http://localhost:3001/guitars/${id}`, {
  method: "DELETE",
})
.then(resp => resp.json())
.then(() => {deleteGuitar(guitar, "guitars")})
}


const handleAddToCart = () => {
  const newItem = { make, model, year, image, price, productId: id};
  fetch(`http://localhost:3001/cart`, {
  method: "POST", 
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newItem)
})
  .then(res => res.json())
  .then(newItem => addCartItem(newItem))
}

  return (
    <div className="main">
        <main>
            <img src={image} alt={make}/>
            <div>Make: {make}</div>
            <div>Model: {model}</div>
            <div>Price: ${price}</div>
            <div>Year: {year}</div>
            <button className='cart-button' onClick={handleAddToCart}>🛒</button>
            <button className='trash-button' onClick={handleDelete}>🗑️</button>    
        </main>
    </div>
  )
}

export default GuitarCard