
import React from 'react';
//import logo from './logo.svg';
import './CSS/App.css';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Events from './Components/Events'
import About from './Components/About'
import Event from './Components/Event'
import {Route} from 'react-router-dom';
import NavBar from './Components/Navbar'

function App() {
  return  <div className="App">
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/events" component={Events} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/event" component={Event} />

  </div>;
  
}
export default App;

