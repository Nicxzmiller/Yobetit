import React from "react";
import Login from "./components/Login/login";
import Register from "./components/Sign-up/register";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import "./App.scss";
import './components/style.scss';
// import {render} from "react-dom";


function App() {
        return(
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={LandingPage}/>
                    <div className="container">
                        <Route  path="/register" component={Register}/>
                        <Route  path="/login" component={Login}/>
                        <Route  path="/profile" component={Profile}/>
                    </div>
                </div>
            </Router>
        )
}


export default App;
