import React, { useState } from "react";
import "./Header.css";
import hamburgerIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="home" className="header">
      <div className="logo">
        <a href="#home">
          <h2 id="nav-logo">NIKHIL SONI</h2>
        </a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menuOpen ? closeIcon : hamburgerIcon} alt="Menu Icon" />
      </div>
      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li
            onClick={() => {
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
          >
            Home
          </li>

          <li
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
          >
            About
          </li>

          <li
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
          >
            Projects
          </li>

          <li
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
