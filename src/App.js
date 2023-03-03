import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";
import "./App.css";

function App() {
  return <Router>
  <nav>
    <Link to="/" className="link">Shop gallery</Link>
    <Link to="/about" className="link">About the artist</Link>
    <Link to="/contact" className="link">Contact</Link>
    
  </nav>

  <Routes>
    <Route path="/" element={<Shop/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
  </Router>

}

export default App;
