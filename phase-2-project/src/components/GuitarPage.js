import React from "react";
import GuitarCard from './GuitarCard'

const GuitarPage = ({guitars}) => {
const mappedGuitars = guitars.map(guitar => <GuitarCard key={guitar.name} guitar={guitar}/>)

  return (
    <div>
         {mappedGuitars}
    </div>
  )
}

export default GuitarPage