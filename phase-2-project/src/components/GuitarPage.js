import React from "react";
import GuitarCard from './GuitarCard'


const GuitarPage = ({guitars, cartItems, setCartItems, deleteGuitar}) => {
const mappedGuitars = guitars.map(guitar => <GuitarCard cartItems={cartItems} setCartItems={setCartItems} key={guitar.id} guitar={guitar} deleteGuitar={deleteGuitar}/>)

  return (
    <div>
         {mappedGuitars}
    </div>
  )
}

export default GuitarPage