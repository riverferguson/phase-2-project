import React from 'react'
import './GuitarCard.css'

const GuitarCard = ({guitar, deleteGuitar, cartItems, setCartItems}) => {
    const {make, model, year, image, price, id} = guitar

const handleDelete = () => {
fetch(`http://localhost:3001/guitars/${id}`, {
  method: "DELETE",
})
.then(resp => resp.json())
.then(() => {deleteGuitar(guitar)})
}

const handleAddToCart = () => {
  const newItem = { make, model, year, image, price, id };
  setCartItems([...cartItems, newItem]);
};

  return (
    <div className="main">
        <main>
            <img src={image} alt={make}/>
            <div>Make: {make}</div>
            <div>Model: {model}</div>
            <div>Price: ${price}</div>
            <div>Year: {year}</div>
            <button onClick={handleAddToCart}>🛒</button>
            <button onClick={handleDelete}>🗑️</button>    
        </main>
    </div>
  )
}

export default GuitarCard
