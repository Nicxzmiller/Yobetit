import React from 'react';
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <h3>Yobetit</h3>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}

export default Nav;
