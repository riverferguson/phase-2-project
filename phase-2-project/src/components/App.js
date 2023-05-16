import React, { useEffect, useState } from "react";
import GuitarForm from "./GuitarForm";
import GuitarPage from "./GuitarPage"
import Nav from "./Nav";
import Search from "./Search"
import "./Nav.css";
import "./App.css";

function App() {
  const [guitars, setGuitars] = useState([]);
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState("")

  const handleShowForm = () => {
    setShowForm(showForm => !showForm)
  }

  const addGuitar = (newGuitar) => {
    setGuitars([...guitars, newGuitar])
  }

  const filteredGuitars = guitars.filter(guitar => guitar.make.toLowerCase().includes(search.toLowerCase()))
  //const finalGuitarFilter = filteredGuitars.filter(guitar => guitar.model.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch("http://localhost:3000/guitars")
      .then((resp) => resp.json())
      .then((guitars) => setGuitars(guitars));
  }, []);

  return (
    <div className="App">
      <Nav />
      <Search search={search} setSearch={setSearch}/>
      <div className="sideBar" >
        <button className="sellButton" onClick={handleShowForm}>Sell Your Guitar Here</button>
      {showForm? <GuitarForm addGuitar={addGuitar}/> : null}
      </div>
      <main>
      <GuitarPage guitars={filteredGuitars}/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;