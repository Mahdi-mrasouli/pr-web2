import React from 'react'
import './aboutus.css'
import images from '../../constants/images'

const  AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overlay flex__center">
        <img src={images.R}/>
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.fork} className='fork__img'/>
          <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam officiis ratione ad autem magnam et nulla facilis recusandae temporibus nihil.</p>
          <button className='custom__button'>Know more</button>
        </div>

        <div className= "app__aboutus-content_knife">
          <img src={images.knife} alt="" />
        </div>
        
        <div className="app__aboutus-content_history">
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.fork} className='fork__img'/>
          <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam officiis ratione ad autem magnam et nulla facilis recusandae temporibus nihil.</p>
          <button className='custom__button'>Know more</button>
        </div>

      </div>
    </div>
  )
}

export default AboutUs