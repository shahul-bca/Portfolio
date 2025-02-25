import React from "react";
import logo from "../assets/logo.png";
import { FiBell } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between ">
      <div className="w-16 px-2 ml-25 py-2">
        <img src={logo} alt=""   />
      </div>
      <ul className="flex flex-row gap-8 px-10 py-5 font-semibold ">
        <li >Home</li>
        <li >About</li>
        <li >Skills</li>
        <li >Services</li>
        <li >Projects</li>
        <li >Contact</li>
      </ul>
      <div>
        <FiBell className="w-5 h-10 mr-25 mt-2" />
      </div>
    </div>
  );
};

export default Navbar;
