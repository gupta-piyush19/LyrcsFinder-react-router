import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="brand">LyrcsFind</h1>
      </Link>
      <div className="Links">
        <button>Change Mode</button>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
