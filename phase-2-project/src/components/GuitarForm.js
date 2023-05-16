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
    setEnteredNew(event.target.value);
  }

  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
  }

  const makeChangeHandler = (event) => {
    setEnteredMake(event.target.value);
  }

  const modelChangeHandler = (event) => {
    setEnteredModel(event.target.value);
  }

  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value);
  }

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
       fetch("http://localhost:3000/guitars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
       })
    setEnteredName('');
  }

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
            <input className="inputBox" placeholder="guitar manufacturer" type='text' value={enteredMake} onChange={makeChangeHandler} />
          </div>
        </div>
        <div>
          <label>Model </label>
          <div>
            <input className="inputBox" placeholder="model of your guitar" type='text' value={enteredModel} onChange={modelChangeHandler} />
          </div>
        </div>
        <div>
          <label>Image </label>
          <div>
            <input className="inputBox" placeholder="image URL of your guitar" type='text' value={enteredImage} onChange={imageChangeHandler} />
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
        <button className= "listButton" type='submit'>List Your Guitar</button>
      </div>
    </form>
  )
}

export default GuitarForm