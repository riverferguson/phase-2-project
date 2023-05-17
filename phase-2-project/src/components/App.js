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


function App() {
  const [guitars, setGuitars] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchType, setSearchType] = useState("")
  const [modelSearch, setModelSearch] = useState("")



  const addGuitar = (newGuitar) => {
    setGuitars([...guitars, newGuitar])
  }

  const deleteGuitar = (guitarToDelete) => {
    const updatedGuitar = guitars.filter(guitar => guitar.id !== guitarToDelete.id)
    setGuitars(updatedGuitar)
  }

  const filteredGuitars = guitars.filter(guitar => {
    const makeMatch = !searchType || searchType === 'make' ? 
      guitar.make.toLowerCase().includes(searchType.toLowerCase()) : 
      false;
      
    const modelMatch = searchType === 'model' ? 
      guitar.model.toLowerCase().includes(modelSearch.toLowerCase()) :
      false;
      
    return makeMatch || modelMatch;
  });

  useEffect(() => {
    fetch("http://localhost:3001/guitars")
      .then((resp) => resp.json())
      .then((guitars) => setGuitars(guitars));
  }, []);

  return (
      <>
        <Nav />
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
        <Route exact path='/'>
          <Search searchType={searchType} setSearchType={setSearchType} modelSearch={modelSearch} setModelSearch={setModelSearch}/>
          <GuitarPage cartItems={cartItems} setCartItems={setCartItems} deleteGuitar={deleteGuitar} guitars={filteredGuitars}/>
        </Route>
        <Route path='/*'>
          <Error/>
        </Route>
        </Switch>
      <Footer/>
     </>
  );
}

export default App;