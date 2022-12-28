import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/todos" className="link">Todos</Link>
        </li>
        <li>
          <Link to="/addtodo" className="link">Add Todo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
