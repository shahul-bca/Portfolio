import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
const Qualification = () => {
  return (
    <>
      <div className=" portfolio md:flex justify-between px-20 py-10 grid">

        <div className="w-25 h-i8 bg-gray-800 text-white rounded">
          <MdCastForEducation className=" w-10 h-20 trext-gtray-800  ml-7" />
          <h1 className=" text-center text-white font-bold">Education</h1>
        </div>

        <div className="md:w-50 bg-gray-800 text-white shadow rounded hover:bg-gray-700  mt-5 items-center mb-5 ">
          <h1 className="text-center font-bold mt-3">High School</h1>
          <p className="text-center text-sm">Gov Of Kerela</p>
        </div>

        <div className="w-50  shadow rounded bg-gray-800 text-white hover:bg-gray-700 mt-5 items-center mb-5  ">
          <h1 className="text-center font-bold mt-3">Higher Secodary</h1>
          <p className="text-center text-sm">Gov Of Kerela</p>
        </div>

        <div className="w-50    shadow rounded bg-gray-800 text-white hover:bg-gray-700 mt-5 items-center mb-5   ">
          <h1 className="text-center font-bold mt-3">Graduation</h1>
          <p className="text-center text-sm">University of calicut</p>
        </div>

        <div className="w-50  shadow rounded bg-gray-800 text-white hover:bg-gray-700 mt-5 items-center mb-5  ">
          <h1 className="text-center font-bold mt-3">Diploma</h1>
          <p className="text-center text-sm">C-DIT</p>
        </div>
      </div>


      <div className="md:flex justify-between px-20 py-10 grid">
        <div className="w-25 h-i8 shadow text-white bg-gray-800 rounded">
          <GrUserExpert  className=" w-10 h-20 trext-gtray-800  ml-7" />
          <h1 className=" text-center text-white font-bold">Experience</h1>
        </div>

        <div className="md:w-50  shadow rounded bg-gray-800 text-white hover:bg-gray-700 mt-5 items-center mb-5 ">
          <h1 className="text-center font-bold mt-3">Maxlore</h1>
          <p className="text-center text-sm">Developer</p>
        </div>
        
        <div className="w-50    shadow rounded  bg-gray-800 text-white hover:bg-gray-700 mt-5 items-center mb-5   ">
          <h1 className="text-center font-bold mt-3">Computer care</h1>
          <p className="text-center text-sm">Dusktop supportEng</p>
        </div>

        <div className="w-50  shadow rounded  bg-gray-800 text-white  hover:bg-gray-700 mt-5 items-center mb-5  ">
          <h1 className="text-center font-bold mt-3">Luminar</h1>
          <p className="text-center text-sm">Developer</p>
        </div>

        <div className="w-50  shadow  rounded  bg-gray-800 text-white hover:bg-gray-700 mt-5 items-center mb-5  ">
          <h1 className="text-center font-bold mt-3">Doctosmart</h1>
          <p className="text-center text-sm">Developer</p>
        </div>
      </div>
    </>
  );
};

export default Qualification;
