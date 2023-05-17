import React, { useEffect, useState } from "react";
import GuitarForm from "./GuitarForm";
import GuitarPage from "./GuitarPage"
import Nav from "./Nav";
import "./Nav.css";
import "./App.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import Error from "./Error";
import Cart from "./Cart";
import Contact from "./Contact";
import Search from './Search'
import Tuner from "./Tuner";


function App() {
  const [guitars, setGuitars] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchMake, setSearchMake] = useState("")
  const [modelSearch, setModelSearch] = useState("")
  const [darkMode, setDarkMode] = useState(false)


  const addGuitar = (newGuitar) => {
    setGuitars([...guitars, newGuitar])
  }

  const deleteGuitar = (guitarToDelete) => {
    const updatedGuitar = guitars.filter(guitar => guitar.id !== guitarToDelete.id)
    setGuitars(updatedGuitar)
  }

  const filteredGuitars = guitars.filter(guitar => {
    const makeMatch = !searchMake || searchMake === 'make' ? 
      guitar.make.toLowerCase().includes(modelSearch.toLowerCase()) : 
      false;
      
    const modelMatch = !searchMake || searchMake === 'model' ? 
      guitar.model.toLowerCase().includes(modelSearch.toLowerCase()) :
      false;
      
    return makeMatch || modelMatch;
  });

  const handleDarkModeClick = () => {
    setDarkMode(currentValue => !currentValue)
  }

  useEffect(() => {
    fetch("http://localhost:3001/guitars")
      .then((resp) => resp.json())
      .then((guitars) => setGuitars(guitars));
  }, []);

  return (
      <div className={darkMode ? "App" : "App light"}>
        <Nav handleDarkModeClick={handleDarkModeClick} darkMode={darkMode}/>
        <Switch>
        <Route path='/guitars/new'>
          <GuitarForm addGuitar={addGuitar}/>
        </Route>
        <Route path='/guitars/cart'>
          <Cart cartItems={cartItems} guitars={guitars}/>
        </Route>
        <Route path='/guitars/contact'>
          <Contact/>
        </Route>
        <Route path='/guitars/tuner'>
          <Tuner/>
        </Route>
        <Route exact path='/'>
          <Search searchMake={searchMake} setSearchMake={setSearchMake} modelSearch={modelSearch} setModelSearch={setModelSearch}/>
          <GuitarPage cartItems={cartItems} setCartItems={setCartItems} deleteGuitar={deleteGuitar} guitars={filteredGuitars}/>
        </Route>
        <Route path='/*'>
          <Error/>
        </Route>
        </Switch>
      <Footer/>
     </div>
  );
}

export default App;