import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png'; 
import project7 from'../assets/project7.png';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const Projects = () => {
  const [select, setslect] = useState(0);

  const projects = [
    { 
      image:project1,
      link:'https://e-shoppingcom.netlify.app'
      }, 
    { 
      image: project2,
      link:'https://educamp-dev.netlify.app' }, 
    { image: project3,
       link:'https://we-application-1.netlify.app'
     } , 
    {image: project4,
       link:'https://fashionwebin.netlify.app'
     },
     {
      image: project5,
      link: 'https://furweb.netlify.app'
     },
     {
      image:project6,
      link: 'https://wheather-updater.netlify.app'
     },
     {
      image:project7,
      link: 'https://modern-todo-listingapp.netlify.app'
     }
  ];

  function plus() 
  {
    setslect((prev)=> (prev+1)% projects.length);
  }


  function minus() 
  { 
    setslect((prev)=> ((prev-1)+ projects.length)% projects.length);
  }

  console.log('jjj',projects[select].image);
  


  return (
    <div   className="md: projects w-full h-fit   px-3 py-3 ">
    <div className=" md:  w-full max-w-2xl mx-auto hover:scale-102 outline-2 rounded-2xl  duration-200 overflow-hidden ">
      
      {/* Carousel Inner */}

      <a href={projects[select].link}>
      <div className="md:flex   hover:shadow-lg transition-transform duration-500" >
        <img src={projects[select].image}  className="w-full shrink-0 " ></img>
      </div>
      </a>
 
      {/* <!-- Navigation Buttons --> */}
      <button onClick={minus}
        className=" top-1/2 left-5  bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
        id="prevButton"
      >
        <FaArrowAltCircleLeft className="w-5 h-5" />
      </button>
      <button onClick={plus}
        className=" justify-between  top-1/2 right-5  bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
        id="nextButton"
      >
        <FaArrowAltCircleRight className="w-5 h-5" />
      </button>
    </div>
    </div>
  );
};

export default Projects;
