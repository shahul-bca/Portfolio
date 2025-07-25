import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { RiHome7Fill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { RiFileUserFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import ThemeToggle from "../hooks/ThemeToggle";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="shadow fixed w-screen top-0  dark:bg-slate-900 text-black dark:text-gray-100 bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <img src={logo} alt="" className="w-12 h-12  dark: bg-gray-100 rounded-full"   />

        {/* Links */}
        <div className="hidden md:flex space-x-6 font-bold">
          <Link
            className="hover:text-gray-500 cursor-pointer "
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-500  cursor-pointer"
            to="profile"
            smooth={true}
            offset={-210}
            duration={500}
          >
            About
          </Link>
          <Link
            className="hover:text-gray-500 cursor-pointer "
            to="skills"
            smooth={true}
            offset={-180}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className="hover:text-gray-500 curseor-pointer"
            to="portfolio"
            smooth={true}
            offset={-180}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            className="hover:text-gray-500"
            to="projects"
            smooth={true}
            offset={-180}
            duration={500}
          >
            Projects
          </Link>
          <Link className="hover:text-gray-500 "  to="contact"
            smooth={true}
            offset={-180}
            duration={500}>
            Contact
          </Link>
        </div>

        {/* Themetoggle icons */}
        <div className="md:flex items-center space-x-4 ">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white hover:bg-gray-500 focus:outline-none">
            <ThemeToggle />
  
          </div>
        </div>

        {/* Mobile Menu */}
        <div  className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-100 "
          >
            {/* <span className="sr-only">Open Menu</span> */}

            {open ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
          {open && (
            <motion.div
              initial={{ scale: 0.8, Y: -150 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              className="w-[90%] h-112 fixed rounded-2xl top-22 
             bg-white shadow-lg backdrop-sepia-0  right-5 dark:bg-gray-800"
            >
              <ul className="flex flex-col gap-8 px-10 py-5 font-semibold">
                <div className="flex items-center gap-x-2">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white  focus:outline-none dark:bg-white ">
                    <RiHome7Fill  className="dark:text-gray-800"/>
                  </div>
                  <Link onClick={() => setOpen(!open)} to="home" smooth={true} offset={-120} duration={500}>
                    Home
                  </Link>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white  focus:outline-none  dark:bg-white ">
                    <HiUserCircle className="w-5 h-5 dark:text-gray-800" />
                  </div>
                  <Link onClick={() => setOpen(!open)} to="profile" smooth={true} offset={-180} duration={500}>
                    About
                  </Link>
                </div>

                <div className="flex items-center gap-x-2">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white  focus:outline-none  dark:bg-white ">
                    <RiFileUserFill className="dark:text-gray-800" />
                  </div>
                  <Link onClick={() => setOpen(!open)} to="skills" smooth={true} offset={-200} duration={500}>
                    Skills
                  </Link>
                </div>

                <div className="flex items-center gap-x-2 gp-y-5">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white  focus:outline-none  dark:bg-white ">
                    <MdContactMail className="dark:text-gray-800" />
                  </div>
                  <Link
                    className="hover:text-gray-500 curseor-pointer"
                    onClick={() => setOpen(!open)}
                    to="portfolio"
                    smooth={true}
                    offset={-180}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                </div>

                <div className="flex items-center gap-x-2 gp-y-5">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white  focus:outline-none  dark:bg-white ">
                  <GrProjects className="dark:text-gray-800" />
                  </div>
                  <Link className="hover:text-gray-500"
                     onClick={() => setOpen(!open)}
                     to="projects"
                     smooth={true}
                     offset={-180}
                     duration={500}>Projects</Link>
                </div>

                <div className="flex items-center gap-x-2 gp-y-5">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white  focus:outline-none  dark:bg-white ">
                    <MdContactMail className="dark:text-gray-800" />
                  </div>
                  <Link
                   onClick={() => setOpen(!open)}
                   to="contact"
                   smooth={true}
                   offset={-190}
                   duration={500}
                  >Contact</Link>
                </div>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
