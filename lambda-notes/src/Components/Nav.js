import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="nav">
      <h1>Lambda Notes</h1>
      <Link to="/" className="button">
        View Your Notes
      </Link>
      <Link to={`notes/create`} className="button">
        + Create New Note
      </Link>
    </nav>
  );
};

export default Nav;
