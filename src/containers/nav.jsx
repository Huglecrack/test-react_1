import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home"
import Contact from "./contact"
import Achat from "./achat"
import Clock from "./dateHeure";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
    <nav>
      <ul>
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/contact">Contactez nous</Link>
        </li>
        <li>
          <Link to="/dateHeure">Horloge</Link>
        </li>
        <li>
          <Link to="/achat">Achat</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/achat" element={<Achat />}></Route>
      <Route path="/dateHeure" element={<Clock />}></Route>
    </Routes>
  </div>
  );
} 

export default Nav;