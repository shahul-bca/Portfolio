import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact grid grid-cols-1 lg:grid-cols-2">
      <div className='flex flex-col items-center mt-25'>
      <div className='w-25 h-fit mb-10 shadow-lg rounded flex flex-row justify-center px-5 py-5 bg-gray-800  text-white  '>
        <div>
          <div className='flex flex-col items-center'>
          <MdEmail />
          <p>Email</p>
          </div>
      
      <div>
        <div>
        <button className='w-20'>write me  <FaArrowRight className='ml-8' /></button>
       
        </div>
   
    
      </div>
      </div>
      </div>
      
      <div className='w-25 h-fit mb-10  flex flex-row justify-center px-5 py-5  shadow-lg rounded  bg-gray-800 text-white '>
        <div>
        <div className='flex flex-col items-center'>

        <FaFacebookMessenger />
      
      <p>Messenger</p>
      </div>
      <div>
        <div>
        <button className='w-20'>write me  <FaArrowRight className='ml-8' /></button>
       
        </div>
   
    
      </div>
      </div>
      </div>

      <div className='w-25 h-fit shadow-lg flex flex-row justify-center px-5 py-5 rounded   bg-gray-800 text-white  '>
        <div>
        <div className='flex flex-col items-center'>

        <FaLinkedin />
      <p>LinkedIn</p>
      </div>
      <div>
        <div>
        <button className='w-20 '>write me  <FaArrowRight className='ml-8' /></button>
       
        </div>
   
    
      </div>
      </div>
      </div>
      
      </div>
      <div>
      <div className="flex items-center justify-center   p-6">
      <form className=" p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className=" text-gray-800 text-2xl font-bold mb-4 dark:text-white "> Write me your project</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-800 text-sm font-medium dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-800 text-sm font-medium dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">

        </div>
        <div className='mb-4'>
        <label
            htmlFor="email"
            className="block text-gray-800 text-sm font-medium dark:text-white"
          >
            Project
          </label>
          <textarea name="" id=""
          className="w-full h-50 mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your project"></textarea>
        </div>
       
        <div className="mt-6 flex justify-center lg:justify-start">
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-md ">
                      <span className="font-bold ">Send message</span>
                      <BsFillSendFill />
                    </button>
                  </div>
      </form>
    </div>
  </div>
      </div>
      
    
  )
}

export default Contact
