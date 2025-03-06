import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://f2.leadsquaredcdn.com/t/t20230102173428/content/common/images/Vignan%20Logo.jpg" alt="Logo" />
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