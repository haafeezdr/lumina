import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header section__padding ' id='home'>
      <div className='header-content'>
        <h1 className='gradient__text'>Welcome To Lumina Creation </h1>
        <p>Home Of Exclusive Fashion</p>
        <div className='header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='header-content__people'>
          <img src={people} alt="people" />
          <p>We Now Have 1000+ Loyal Customers Who Have Trusted Us</p>
        </div>
      </div>
      <div className='header-image'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header