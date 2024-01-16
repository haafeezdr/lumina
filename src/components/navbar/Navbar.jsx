import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">Why LUMINA?</a></p>
    <p><a href="#blog">Gallary</a></p>
    <p><a href="#features">Case Studies</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <h1>LUMINA</h1>
        </div>
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='navbar-sign'>
        <p>Join us</p>
        <button type='button'>Sign In</button>
      </div>

      <div className='navbar-menu'>
        { toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}

        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu />
              <div className='navbar-menu_container-links-sign'>
                <p>Join us</p>
                <button type='button'>Sign In</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar