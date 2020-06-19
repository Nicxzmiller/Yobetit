import React, { useState, useEffect} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import SearchBox from "./components/SearchBox/SearchBox";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

    let countries; // will contained fetched countries data

    fetch('https://restcountries.eu/rest/v2/all') // Api containing data for countries
        .then(res => res.json())
        .then(data => initialize(data))
        .catch(err => console.log(err));
    
    function initialize(countriesData) {
        countries = countriesData;
        let options = "";
        countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name} (+${country.callingCodes[0]})</option>`);
        document.getElementById("countries").innerHTML = options;
        displayCountryInfo("AFG");
    }

    function displayCountryInfo(countryByAlpha3Code) {
        const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code );
        console.log(countryData);
        document.getElementById("capital").innerHTML = countryData.capital;
        document.getElementById("dialing-code").innerHTML = countryData.callingCodes;
        document.getElementById("population").innerHTML = countryData.population;
        document.getElementById("currencies").innerHTML = countryData.currencies[0].code;
        document.getElementById("region").innerHTML = countryData.region;
        document.getElementById("subregion").innerHTML = countryData.subregion;
    }

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
    <div>
        <div className="pa4 tc">
            <img src="http://tachyons.io/img/logo.jpg" className="br4 h3 w3 dib" alt="avatar"/>
        </div>
        <br/>
        <select name="countries" id="countries"></select><br/><br/>
        <SearchBox searchChange=""/><br/>
        <div>
            <p>Capital: <span id="capital"></span></p>
            <p>Dialing Code: <span id="dialing-code"></span></p>
            <p>Population: <span id="population"></span></p>
            <p>Currencies: <span id="currencies"></span></p>
            <p>Region: <span id="region"></span></p>
            <p>Sub-region: <span id="subregion"></span></p>
        </div>
    </div>
);

export default App;
