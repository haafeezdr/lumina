import React from 'react'
import './possibility.css'
import best from '../../assets/best.jpg'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={best} alt="best" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Made From The Best To Fit The Best</h4>
        <h1 className='gradient__text'>The possibility is beyound our imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, nihil. Quisquam dicta sit quod similique.</p>
      </div>
    </div>
  )
}

export default Possibility