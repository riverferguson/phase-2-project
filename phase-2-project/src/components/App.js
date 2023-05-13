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


function App() {
  const [guitars, setGuitars] = useState([]);

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
          <GuitarForm />
        </Route>
        {/* <Route>
          <Cart />
        </Route>
        <Route>
          <Contact/>
        </Route> */}
        <Route exact path='/'>
          <GuitarPage guitars={guitars}/>
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
