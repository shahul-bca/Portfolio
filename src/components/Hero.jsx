import React from "react";
import { PiHandWavingBold } from "react-icons/pi";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { RiGithubFill } from "react-icons/ri";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { BsFillSendFill } from "react-icons/bs";
import { RiScrollToBottomLine } from "react-icons/ri";
import user from "../assets/user1.jpg";
const Hero = () => {
  return (
    <div className=" home hero w-full h-fit flex flex-col lg:flex-row items-center justify-center mt-18 ">
    <div className="lg:w-3/4 w-full grid lg:grid-cols-3 grid-cols-1 gap-8 px-5">

      <div className="flex  md:justify-start   mt-20 ">
        <ul className="mdflex lg:flex-col gap-5 sm:flex-row">
          <li>
            <AiFillInstagram className="w-8  text-gray-800 hover:w-12 h-12 cursor-grab  dark:text-gray-100" />
          </li>
          <li>
            <TbBrandWhatsappFilled className="w-8  text-gray-800 hover:w-12 h-12  cursor-grab  dark:text-gray-100" />
          </li>
          <li>
            <RiGithubFill className="w-8  text-gray-800 hover:w-12 h-12  cursor-grab  dark:text-gray-100" />
          </li>
        </ul>
      </div>

      <div>
        <div className="flex gap-3 items-center justify-center lg:justify-start mt-5">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800  dark:text-gray-100">shahul</h1>
          <PiHandWavingBold className="w-8 h-8 lg:w-10 lg:h-10 text-amber-200" />
        </div>
        <div className="mt-5 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <HiMiniAdjustmentsHorizontal className="w-6 h-6 lg:w-10 lg:h-10 text-gray-500" />
            <h2 className="text-xl lg:text-2xl text-gray-800  dark:text-gray-100">Frontend Developer</h2>
          </div>
          <p className="text-gray-400 mt-4">
            I'm a creative frontend developer based in India, and I am very passionate and dedicated to my work..
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-md ">
              <span className="font-bold ">Say Hello</span>
              <BsFillSendFill />
            </button>
          </div>
          <div className="flex justify-center lg:justify-start items-center mt-1">
            <RiScrollToBottomLine className="w-8 h-8 text-gray-600" />
            <h3 className="ml-2">Scroll Down</h3>
          </div>
        </div>
      </div>
  
      <div className="flex justify-center lg:justify-end mt-5">
        <img
          src={user}
          alt=""
          className="rounded-3xl w-full max-w-sm lg:max-w-none lg:rounded-md"
        />
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
