import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import { Login } from "../src/components/index";
//import SearchBox from "./components/SearchBox/SearchBox";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {

    return (
      <Router>
          <div className="App">
              <Login/>
              {/*<Nav />*/}
              {/*<Switch>*/}
              {/*    <Route path="/" exact component={Home}/>*/}
              {/*    <Route path="/about" component={About}/>*/}
              {/*    <Route path="/login" component={Login}/>*/}
              {/*</Switch>*/}
          </div>
      </Router>
  );
 }


// const Home = () => (
//     <div>
//         <header>
//             <div  className="container">
//                 <h1>Countries Around the world</h1>
//                 {/*<button className="btn dark-mode">*/}
//                 {/*    Dark Mode*/}
//                 {/*</button>*/}
//             </div>
//         </header>
//
//         <section>
//             <div className="container">
//                 <SearchBox id="search" searchChange="" />
//
//                 <div className="dropdown">
//                     Filter by region
//                     <ul>
//                         <li>Africa</li>
//                         <li>America</li>
//                         <li>Asia</li>
//                         <li>Europe</li>
//                         <li>Oceania</li>
//                     </ul>
//                 </div>
//             </div>
//         </section>
//
//         <section>
//             <div className="container countries" id="countries">
//                 {/*<h2>Countries Loading...</h2>*/}
//
//                 <div className="card">
//                     <div>
//                         <img src="https://restcountries.eu/data/deu.svg" alt="Germany"/>
//                     </div>
//                     <div className="card-body">
//                         <h2>Germany</h2>
//                         <p><strong>Population</strong>: 80,000,000</p>
//                         <p><strong>Region</strong>: Europe</p>
//                         <p><strong>Capital</strong>: Berlin</p>
//                     </div>
//                 </div>
//
//
//
//
//
//             </div>
//         </section>
//     </div>
// );

export default App;
