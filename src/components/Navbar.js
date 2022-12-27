import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/addtodo">Add Todo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
