import React, { useState, useEffect} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import SearchBox from "./components/SearchBox/SearchBox";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

    return (
      <Router>
          <div className="App">
              <Nav />
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/login" component={Login}/>
              </Switch>
          </div>
      </Router>
  );
}

const Home = () => (
    <div className="container">
        <br/>

        <SearchBox searchChange="" /><br/>
    </div>
);

export default App;
