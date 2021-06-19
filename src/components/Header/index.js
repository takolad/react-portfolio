import React from "react";
import "./style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span className="navbar-brand ms-3">John Hinojosa's Portfolio</span>
      <a className="navbar-brand" href="/react-portfolio/">
        <span className="navText">Home</span>
      </a>
      <a className="navbar-brand" href="/react-portfolio/portfolio">
        <span className="navText">Portfolio</span>
      </a>
      <a
        className="navbar-brand"
        href="https://github.com/takolad"
        target="_blank"
        rel="noreferrer"
      >
        <span className="navText">GitHub Profile</span>
      </a>
    </nav>
  );
}

export default Header;
