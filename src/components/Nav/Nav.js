import React from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle ={
        color:'white',
        textUnderline:'none'
    };

    return (
        <nav>
            <h3>Yobetit</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/login">
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
