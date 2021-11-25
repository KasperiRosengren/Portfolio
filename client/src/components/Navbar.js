// client/src/components/Navbar.js
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () =>{
    return (
        <div className="navBar">
            <Router>
                <Link to="#about" className="navBarLink">About</Link>
                <Link to="#projects" className="navBarLink">Projects</Link>
                <Link to="#contact" className="navBarLink">Contact</Link>
            </Router>
        </div>
    );
}

export default Navbar
