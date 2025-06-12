import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Portfolio</h1>
      <div className="nav-actions">
        <button>Login</button>
        <button>Settings</button>
      </div>
    </div>
  );
}

export default Navbar;
