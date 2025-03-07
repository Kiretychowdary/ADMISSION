import React from "react";
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://vignan.ac.in/newvignan/assets/images/Logo%20with%20Deemed.svg" alt="Logo" />
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#campus">Campus</a>
        <a href="#academics">Academics</a>
        <a href="#research">Research</a>
        <a href="#programs">Programs</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </header>
  );
}

export default Header;