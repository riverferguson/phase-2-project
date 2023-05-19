import './GuitarForm.css'
import { useState } from 'react'

const GuitarForm = ({ addGuitar }) => {
  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    image: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGuitar = { ...formData };
    fetch("http://localhost:3001/guitars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGuitar),
    })
      .then((resp) => resp.json())
      .then((createdGuitar) => {
        addGuitar(createdGuitar);
        setFormData({
          year: "",
          make: "",
          model: "",
          image: "",
          price: "",
        });
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      <div>
        <h2>Sell Your Guitar</h2>
        <div>
          <label>Year </label>

          <input
            className="inputBox"
            placeholder="ex. 1969"
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Make </label>

          <input
            className="inputBox"
            placeholder="ex. Fender"
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Model </label>

          <input
            className="inputBox"
            placeholder="ex. Stratocaster"
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Image </label>

          <input
            className="inputBox"
            placeholder="ex. https://guitar.com/yourGuitarImage.jpg"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Price </label>

          <input
            className="inputBox"
            placeholder="ex. 699.99"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <button className="listButton" type="submit">
        List Your Guitar
      </button>
    </form>
  );
};

export default GuitarForm