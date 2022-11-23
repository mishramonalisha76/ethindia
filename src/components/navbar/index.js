import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import 'animate.css';

export default function Navbar() {
  return (
    <nav className="navbar animate__animated animate__fadeInDown">
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
