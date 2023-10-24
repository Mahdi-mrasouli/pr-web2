import React from 'react'
import { Subheading } from '../../components'
import images from '../../constants/images'
import './header.css'

function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper_info">
        <Subheading title={'Chase the new flavour'}/>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans'style={{margin: '2rem 0'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ducimus laboriosam nam assumenda! Dicta assumenda expedita voluptatem quidem quas ducimus!</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} />
      </div>
    </div>
  )
}

export default Header