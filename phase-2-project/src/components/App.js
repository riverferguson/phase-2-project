import React, { useEffect, useState } from "react";
import GuitarForm from "./GuitarForm";
import GuitarPage from "./GuitarPage"
import Nav from "./Nav";
import "./Nav.css";
import "./App.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import Error from "./Error";
// import Cart from "./Cart";
// import Contact from "./Contact";
import Search from './Search'


function App() {
  const [guitars, setGuitars] = useState([]);
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
    return !searchType || searchType === 'make'? guitar.make.toLowerCase().includes(searchType.toLowerCase() ) : guitar.model.toLowerCase().includes(modelSearch.toLowerCase()) 
  })
 

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
        {/* <Route>
          <Cart />
          </Route>
          <Route>
          <Contact/>
        </Route> */}
        <Route exact path='/'>
        <Search searchType={searchType} setSearchType={setSearchType} modelSearch={modelSearch} setModelSearch={setModelSearch}/>
          <GuitarPage deleteGuitar={deleteGuitar} guitars={filteredGuitars}/>
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