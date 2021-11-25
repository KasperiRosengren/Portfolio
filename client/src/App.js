// client/src/App.js

import React from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
//import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function App() {
  return (
    <div className="mainPage">
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}