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


  const addCartItem = (newItem) => {
   setCartItems(currentItems => [...currentItems, newItem])
    }



  const addGuitar = (newGuitar) => {
    setGuitars([...guitars, newGuitar])
  }

  const deleteGuitar = (guitarToDelete, collection) => {
    const fn = collection === "guitars" ? setGuitars : setCartItems
    fn(currentGuitars => currentGuitars.filter(guitar => ((guitar.productId || guitar.id) !== guitarToDelete.id)))
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
          <Cart setCartItems={setCartItems} deleteGuitar={deleteGuitar} cartItems={cartItems}/>
        </Route>
        <Route path='/guitars/contact'>
          <Contact/>
        </Route>
        <Route path='/guitars/tuner'>
          <Tuner/>
        </Route>
        <Route exact path='/'>

          <Search searchMake={searchMake} setSearchMake={setSearchMake} modelSearch={modelSearch} setModelSearch={setModelSearch}/>
          <GuitarPage addCartItem={addCartItem} cartItems={cartItems} setCartItems={setCartItems} deleteGuitar={deleteGuitar} guitars={filteredGuitars}/>
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