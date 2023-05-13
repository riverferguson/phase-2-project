import React, { useEffect, useState } from "react";
import GuitarForm from "./GuitarForm";
import GuitarPage from "./GuitarPage"
import Nav from "./Nav";
import "./Nav.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Error from "./Error";
import Cart from "./Cart";


function App() {
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/guitars")
      .then((resp) => resp.json())
      .then((guitars) => setGuitars(guitars));
  }, []);

  return (
      <>
        <Nav />
        <Switch>
        <Route path='projects/id:/new'>
          <GuitarForm />
        </Route>
        <Route exact path='/'>
          <GuitarPage guitars={guitars}/>
        </Route>
        <Route>
          <Cart />
        </Route>
        <Route>
          <Error />
        </Route>
        </Switch>
      <Footer/>
     </>
  );
}

export default App;
