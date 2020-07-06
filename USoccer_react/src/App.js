
import React from 'react';
//import logo from './logo.svg';
import './CSS/App.css';
import Home from './Components/Home'
import Profile from './Components/Profile'
import Events from './Components/Events'
//import About from './Components/Find'
import Event from './Components/Event'
import NotFoundPage from './Components/NotFoundPage'
import {Route, Switch} from 'react-router-dom';
import NavBar from './Components/Navbar'
import Chat from './Components/Chat/Chat';
import Join from './Components/Join/Join';
import Communication from './Components/Communication'

function App() {
  return  <div className="App">
    <NavBar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/events/" component={Events} />
    <Route exact path="/profile/" component={Profile} />
    <Route exact path="/event" component={Event} />
    <Route path="/communication" component={Communication} />
    <Route path="/Join" exact component={Join} />
    <Route path="/Chat" component={Chat} />
    <Route component={NotFoundPage} />
    </Switch>

  </div>;
  
}


export default App;

