import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-1 mt-10 text-xs text-dark-200 tracking-wide">
      <ul className="flex items-center gap-2">
        <li>Vick rules</li>
        <li>Privacy policy</li>
        <li>Terms of service</li>
      </ul>
      <p>Vick, Inc. © 2025. All rights reserved.</p>
    </div>
  );
};

export default Footer;
