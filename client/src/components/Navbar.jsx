import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/stats" className="navbar-item">
            Football Stats
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Add Data
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/update" className="navbar-link">
              Update Data
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/delete" className="navbar-link">
              Delete Data
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/stats" className="navbar-link">
              Stats
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/top10" className="navbar-link">
              Records
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/average-goals" className="navbar-link">
              Avg Goals
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
