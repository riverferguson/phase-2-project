// header will hold this component
// form here
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
      <div>
        <div>
          <label>Name</label>
          <input type='text' value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div>
          <label>Price</label>
          <input type='number' value={enteredPrice} onChange={priceChangeHandler} />
        </div>
      </div>
      <div>
        <button type='submit'>Search</button>
      </div>
    </form>
  )
}

export default GuitarForm