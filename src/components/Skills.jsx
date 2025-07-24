import React from "react";
import { TiTick } from "react-icons/ti";
const Skills = () => {
  const repat = [
    { name: "HTML5", experience: "Advanced" },
    { name: "Javascript", experience: "Advanced" },
    { name: "CSS3", experience: "Advanced" },
    { name: "TaiwindCSS", experience: "Advanced" },
    { name: "ReactJs", experience: "Advanced" },
    { name: "Git", experience: "Advanced" }
  ];
  const repeated = [
    { name: "php", experience: "Advanced" },
    { name: "Node", experience: "Advanced" },
    { name: "Laravel", experience: "Advanced" },
    { name: "ExpressJs", experience: "Advanced" },
    { name: "MogoDB", experience: "Advanced" },
    { name: "SQL", experience: "Advanced" }
  ];

  const repeating = [
    { name: "OS", experience: "Advanced" },
    { name: "installation", experience: "Advanced" },
    { name: "Laptops", experience: "Advanced" },
    { name: "Debug", experience: "Advanced" },
    { name: "AnyDesk", experience: "Advanced" },
    { name: "Desktops", experience: "Advanced" }
  ];

  return (
    <div className="skills">
     
      <div className="md:grid grid-cols-3  sm:grid  hover:bg-gray-800 transition duration-1000 dark:text-gray-800 ">
        <div className="w-full flex  flex-col justify-center items-center gap-6 mb-10 mt-10    ">
          <div className=" pl-7 pt-4 py-5 shadow p-4 bg-gray-100 rounded items-center">
          <h1 className="text-center font-bold text-2xl mb-4">Frontend developer</h1>
          <div className="grid grid-cols-2 ">
            {repat.map((i,index) => (
              <div key={index} className="flex w-[100px]">
                <div className=" flex items-center w-full h-16">
                  <TiTick className="mb-7 " />
                  <div className="flex flex-col justify-between">
                    <div className="text-1xl font-bold">{i.name}</div>
                    <div className="text-sm font-light">{i.experience}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>


        <div className="md:w-full flex  flex-col justify-center items-center gap-6 mb-10  mt-10 ">
            <div className=" pl-7 pt-4 py-5 shadow p-4 bg-gray-100 rounded items-center">
          <h1 className="text-center font-bold text-2xl mb-4 ">Backend developer</h1>
          <div className="grid grid-cols-2 ">
            {repeated.map((i,index) => (
              <div key={index}  className="flex w-[100px]">
                <div className=" flex items-center w-full h-16">
                  <TiTick className="mb-7" />
                  <div className="flex flex-col justify-between">
                    <div  className="text-1xl font-bold">{i.name}</div>
                    <div className="text-sm font-light">{i.experience}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-6 mb-10 mt-10">
          <div  className=" pl-7 pt-4 py-5 shadow p-4 bg-gray-100 rounded items-center">
          <h1 className="text-center font-bold text-2xl mb-4"> Desktop  Support</h1>
          <div className="grid grid-cols-2 ">
            {repeating.map((i,index) => (
              <div key={index} className="flex w-[100px]">
                <div className="flex items-center w-full h-16">
                  <TiTick className="mb-7" />
                  <div className="flex flex-col justify-between">
                    <div className="text-1xl font-bold">{i.name}</div>
                    <div className="text-sm font-light">{i.experience}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
