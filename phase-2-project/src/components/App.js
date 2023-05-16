import React, { useEffect, useState } from "react";
import GuitarForm from "./GuitarForm";
import GuitarPage from "./GuitarPage"
import Nav from "./Nav";
import "./Nav.css";
import "./App.css";


function App() {
  const [guitars, setGuitars] = useState([]);
  const [showForm, setShowForm] = useState(false)


  const handleShowForm = () => {
    setShowForm(showForm => !showForm)
  }

  useEffect(() => {
    fetch("http://localhost:3000/guitars")
      .then((resp) => resp.json())
      .then((guitars) => setGuitars(guitars));
  }, []);

  return (
    <div className="App">
      
      <nav>
      <Nav />
      </nav>
      <div className="sideBar" >
        <button className="sellButton" onClick={handleShowForm}>Sell Your Guitar Here</button>
      {showForm? <GuitarForm /> : null}
      </div>
      <main>
      <GuitarPage guitars={guitars}/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
