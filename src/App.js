import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Contact from "./pages/contact"
import Achat from "./pages/achat"

export default function App () {
  <div className="App">
    <nav>
      <ul>
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/contact">Contactez nous</Link>
        </li>
        <li>
          <Link to="/achat">Achat</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" Component={<Home />}></Route>
      <Route path="/contact" Component={<Contact />}></Route>
      <Route path="/achat" Component={<Achat />}></Route>
    </Routes>
  </div>
} 