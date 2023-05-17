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
        <label>Year </label>

        <input
          className="inputBox"
          placeholder="what year was your guitar made?"
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
          placeholder="guitar manufacturer"
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
          placeholder="model of your guitar"
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
          placeholder="image URL of your guitar"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Price $</label>

        <input
          className="inputBox"
          placeholder="your bid price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <button className="listButton" type="submit">
        List Your Guitar
      </button>
    </form>
  );
};

export default GuitarForm