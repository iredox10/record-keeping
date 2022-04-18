import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between bg-blue-400 text-white capitalize p-2">
      <Link to="/">
        <h1 className="">record keeping</h1>
      </Link>
      <nav className="flex items-center gap-3 ">
        <Link to="/about">about </Link>
        <Link to="/services">services </Link>
      </nav>
    </div>
  );
}

export default Header;
