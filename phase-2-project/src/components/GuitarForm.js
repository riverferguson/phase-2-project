// header will hold this component
// form here
import './GuitarForm.css'
import { useState } from 'react'

const GuitarForm = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredPrice, setPrice] = useState('')

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  }

  // const submitHandler = (event) => {
  //   event.preventDefault();
    
  //   setEnteredName('');
  // }

  return (
    <form>
      <div className="guitarForm">
        <span>
          <label>Name: </label>
          <input type='text' value={enteredName} onChange={nameChangeHandler} />
        </span>
        <span>
          <label>Price: </label>
          <input type='number' value={enteredPrice} onChange={priceChangeHandler} />
        </span>
      </div>
      <div>
        <button type='submit'>SELL</button>
      </div>
    </form>
  )
}

export default GuitarForm