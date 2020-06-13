
import React from 'react';
//import logo from './logo.svg';
import './CSS/App.css';
import Home from './Components/Home'
import Profile from './Components/Profile'
import Events from './Components/Events'
//import About from './Components/Find'
import Event from './Components/Event'
import {Route} from 'react-router-dom';
import NavBar from './Components/Navbar'
import Find from './Components/Find';

function App() {
  return  <div className="App">
    <NavBar />
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/find" component={Find} /> */}
    <Route exact path="/events" component={Events} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/event" component={Event} />

  </div>;
  
}
export default App;

