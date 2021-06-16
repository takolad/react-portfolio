import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>&copy; Copyright {new Date().getFullYear()} John Hinojosa</span>
    </footer>
  );
}

export default Footer;
