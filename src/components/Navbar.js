import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar" className="navbar">
      <div className="logo"></div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Plans">Planes</Link></li>
        <li><Link to="/TrainingTypes">Entrenamientos</Link></li>
        <li><Link to="/Blog">Mi Blog</Link></li>
        <li><Link to="/Contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
