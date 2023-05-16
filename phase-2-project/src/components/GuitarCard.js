import React from 'react'
import './GuitarCard.css'

const GuitarCard = ({guitar}) => {
    const {make, model, year, image, price, name} = guitar
  return (
    <div className="main">
        <main>
            <img src={image} alt={name}/>
            <div>Make: {make}   Model: {model}</div>
            <div>Price: ${price}</div>
            <div>Year: {year}</div>
            <button>🛒</button>
            <button>🗑️</button>
            
        </main>
    </div>
  )
}

export default GuitarCard