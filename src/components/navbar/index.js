import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <p className="navbar-logo">MULTIFI</p>
      <div className="navbar-menu">
        <p>Home</p>
        <p>About</p>
        <p>Security</p>
        <p>Contact</p>
      </div>
      <Link to="dashboard" className="navbar-button">
        <button>Launch Dapp</button>
      </Link>
    </nav>
  );
}
