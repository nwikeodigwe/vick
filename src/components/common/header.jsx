import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <h1>Vick</h1>
      </div>
      <div>
        <Link to="/help">Help</Link>
      </div>
    </header>
  );
};

export default Header;
