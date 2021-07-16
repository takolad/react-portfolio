import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Header() {
  const location = useLocation().pathname.split("/")[1];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <span className="navbar-brand ms-3">John Hinojosa's Portfolio</span>
      <a className="navbar-brand" href="/react-portfolio/">
        <span
          className={
            location === "home" || location === ""
              ? "nav-link navbar-text active"
              : "nav-link navbar-text"
          }
        >
          Home
        </span>
      </a>
      <Link className="navbar-brand" to="/react-portfolio/portfolio">
        <span
          className={
            location === "portfolio"
              ? "nav-link navbar-text active"
              : "nav-link navbar-text"
          }
        >
          Portfolio
        </span>
      </Link>
      <Link className="navbar-brand" to="/react-portfolio/contact">
        <span
          className={
            location === "contact"
              ? "nav-link navbar-text active"
              : "nav-link navbar-text"
          }
        >
          Contact
        </span>
      </Link>
      <a
        className="navbar-brand ms-auto"
        href="https://github.com/takolad"
        target="_blank"
        rel="noreferrer"
      >
        <span className="navText">GitHub Profile</span>
      </a>
      <a
        className="navbar-brand"
        href="https://www.linkedin.com/in/john-hinojosa/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="navText">LinkedIn Profile</span>
      </a>
    </nav>
  );
}

export default Header;
