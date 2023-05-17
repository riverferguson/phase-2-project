import React from "react";
import GuitarCard from './GuitarCard'


const GuitarPage = ({guitars, cartItems, setCartItems, addCartItem, deleteGuitar}) => {
const mappedGuitars = guitars.map(guitar => <GuitarCard deleteGuitar={deleteGuitar} addCartItem={addCartItem} cartItems={cartItems} setCartItems={setCartItems} key={guitar.id} guitar={guitar}/>)

  return (
    <div>
         {mappedGuitars}
    </div>
  )
}

export default GuitarPage