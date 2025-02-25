import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { SiGooglecolab } from "react-icons/si";
const Profile = () => {
  return (
    <>
      <div className=" profile flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9  justify-center items-center ">
        <div className="h-60 w-85 p-4 shadow-amber-50   flex flex-col items-center space-y-2 bg-white dark:bg-transparent">
          <div className="text-5xl  text-gray-400 py-10 hover:text-6xl">
            <GrUserExpert />
          </div>
          <h1 className="text-lg font-bold">Experience</h1>
          <h1 className="text-gray-600 font-semibold ">1+ year</h1>
        </div>

        <div className="h-60 w-85  p-4 flex flex-col items-center space-y-2 bg-white dark:bg-transparent">
          <div className="text-5xl text-gray-400 py-10 hover:text-6xl ">
            <GrProjects />
          </div>
          <h1 className="text-lg font-bold">Completed</h1>
          <h1 className="text-gray-600 font-semibold ">10+ Projects</h1>
        </div>

        <div className="md:h-60   p-4 flex flex-col items-center space-y-2 bg-white sm:h-40 dark:bg-transparent ">
          <div className="text-5xl text-gray-400 py-10 hover:text-6xl transition-normal">
            <BiSupport />
          </div>
          <h1 className="text-lg font-bold">Support</h1>
          <h1 className="text-gray-600 font-semibold">1k Followers </h1>
        </div>

        <div className="h-60 w-85 p-4 flex flex-col items-center space-y-2 bg-white dark:bg-transparent">
          <div className="text-5xl text-gray-400 py-10 hover:text-6xl ">
            <SiGooglecolab />
          </div>
          <h1 className="text-lg font-bold">Colab</h1>
          <h1 className="text-gray-600 font-semibold">2+ Componey</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
