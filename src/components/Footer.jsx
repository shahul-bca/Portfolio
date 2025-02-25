import React from 'react'

import { GiSelfLove } from "react-icons/gi";
const Footer = () => {
  return (
    <div className='w-full h-25 py-10  flex flex-row justify-evenly  dark:bg-slate-900 text-black dark:text-gray-100 bg-gray-100'>

      <p>© 2025 CriptoCoder</p>
      <div className='flex flex-row'>
      <p>Send Feedback </p>
      <GiSelfLove className='w-5 h-5 ml-2' />
      </div>
       

    </div>
  )
}

export default Footer
