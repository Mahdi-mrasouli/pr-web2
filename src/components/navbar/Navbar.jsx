import React , {useState} from 'react'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

import images from '../../constants/images';

const Menu = () =>(
    <>
    
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    
    </>

)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="website logo" width={100} />
      </div>
      <ul className='app__navbar-links'>
        <Menu/>
      </ul>
      
      <div className="app__navbar-login">
        
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div></div>
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={30} onClick={() => {setToggleMenu(true)}}></GiHamburgerMenu>

        
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={30} className="overlay__close" onClick={() => {setToggleMenu(false)}}></MdOutlineRestaurantMenu>
          <ul className='app__navbar-smallscreen-links'>
            <Menu/>
          </ul>
        </div>

        )}
      </div>
    </nav>
  )
}

export default Navbar