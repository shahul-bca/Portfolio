import React from 'react'
import './Title.css'
const Title = ({subTitle,title}) => {
  return (
    <div className='title  '>
      <p className=''>{title}</p>
      <h2>{subTitle}</h2>
     
    </div>
  )
}

export default Title
