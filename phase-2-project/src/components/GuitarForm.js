// header will hold this component
// form here
import './GuitarForm.css'
import { useState } from 'react'

const GuitarForm = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNew, setEnteredNew] = useState('')
  const [enteredYear, setEnteredYear] = useState('')
  const [enteredMake, setEnteredMake] = useState('')
  const [enteredModel, setEnteredModel] = useState('')
  const [enteredImage, setEnteredImage] = useState('')
  const [enteredPrice, setPrice] = useState('')

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const newChangeHandler = (event) => {

  }

  const yearChangeHandler = (event) => {

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
        <div>
          <label>Name </label>
          <div>
          <input className="inputBox" placeholder="name of your guitar" type='text' value={enteredName} onChange={nameChangeHandler} />
          </div>
        </div>
        <div>
          <label>New? </label>
          <div>
            <input className="inputBox" placeholder="true or false" type='text' value={enteredNew} onChange={newChangeHandler} />
          </div>
        </div>
        <div>
          <label>Year </label>
          <div>
            <input className="inputBox" placeholder="what year was your guitar made?" type='text' value={enteredYear} onChange={yearChangeHandler} />
          </div>
        </div>
        <div>
          <label>Make </label>
          <div>
            <input className="inputBox" placeholder="guitar manufacturer" type='text' value={enteredName} onChange={nameChangeHandler} />
          </div>
        </div>
        <div>
          <label>Model </label>
          <div>
            <input className="inputBox" placeholder="model of your guitar" type='text' value={enteredName} onChange={nameChangeHandler} />
          </div>
        </div>
        <div>
          <label>Image </label>
          <div>
            <input className="inputBox" placeholder="input your image URL" type='text' value={enteredName} onChange={nameChangeHandler} />
          </div>
        </div>
        <div>
          <label>Price $</label>
          <div>
            <input className="inputBox" placeholder="your bid price" type='number' value={enteredPrice} onChange={priceChangeHandler} />
          </div>
        </div>
      </div>
      <div>
        <button type='submit'>List Your Guitar</button>
      </div>
    </form>
  )
}

export default GuitarForm