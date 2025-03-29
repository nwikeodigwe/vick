import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="pt-4">
        <ul className="flex justify-center gap-4 p-4 text-dark-200 text-sm">
          <li>
            <Link to="/terms">Terms of use</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/privacy">Privacy policy</Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
