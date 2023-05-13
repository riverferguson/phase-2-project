import React from "react";
import GuitarCard from './GuitarCard'


const GuitarPage = ({guitars, deleteGuitar}) => {
const mappedGuitars = guitars.map(guitar => <GuitarCard key={guitar.id} guitar={guitar} deleteGuitar={deleteGuitar}/>)

  return (
    <div>
         {mappedGuitars}
    </div>
  )
}

export default GuitarPage