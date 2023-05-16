import React from 'react'
import './GuitarCard.css'

const GuitarCard = ({guitar, deleteGuitar}) => {
    const {make, model, year, image, price, id} = guitar

const handleDelete = () => {
fetch(`http://localhost:3000/guitars/${id}`, {
  method: "DELETE",
})
.then(resp => resp.json())
.then(() => {deleteGuitar(guitar)})
}


  return (
    <div className="main">
        <main>
            <img src={image} alt={make}/>
            <div>Make: {make}   Model: {model}</div>
            <div>Price: ${price}</div>
            <div>Year: {year}</div>
            <button>🛒</button>
            <button onClick={handleDelete}>🗑️</button>
            
        </main>
    </div>
  )
}

export default GuitarCard