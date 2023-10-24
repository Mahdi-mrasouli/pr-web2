import React from 'react'
import {FiFacebook, FiYoutube, FiTwitter} from 'react-icons/fi'
import {Newsletter, FooterOverlay} from '../../components';
import {bg} from '../../constants'
import {images} from '../../constants'
import './footer.css'



const  Footer = () => (
  
    <div className="app__footer app__bg" id='login'>
      <Newsletter/>
      
      <div className="app__video-bg">
        <div className='app__footer-contents section__padding'>
          <div className="app__footer-links_contact">
            <h1 className='app__footer-headtext'>Contact Us</h1>
            <p className='p__opensans'>Phone: +1 111-222-333</p>
            <p className='p__opensans'>Fax : +1 444-555</p>
            <p className='p__opensans'>Address: Iran-Tabriz-Roshdie-Boostan street - P03</p>
          </div>
          <div className="app__footer-links_logo">
            <img src={images.logo} width={200}/>
            <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
            <img src={images.fork} width={50} />
            <ul className='app__footer-media'>
              <li className='app__footer-media_icons'><FiYoutube/></li>
              <li className='app__footer-media_icons'><FiFacebook/></li>
              <li className='app__footer-media_icons'><FiTwitter/></li>
            </ul>
          </div>
          <div className="app__footer-links_work">
            <h1 className='app__footer-headtext'>Working Hours</h1>
            <div className="app__footer-workingHours">
              <p className='p__opensans'>Monday - Friday</p>
              <p className='p__opensans'>08:00 am - 12:00 am</p>
            </div>
            <img src={images.fork} width={50} />
            <div className="app__footer-workingHours">
              <p className='p__opensans'>Saturday.Sunday</p>
              <p className='p__opensans'>09:00 am - 10:00 am</p>
            </div>
          </div>
        </div>

        <div className="app__footer-copyright">
          <p>2024 Italian Restuarant.All Rights Reserved.</p>
        </div>
        <video src={bg} autoPlay loop muted ></video>
        <div className="app__footer-overlay"></div>
      </div>

      
      
    </div>
  
)

export default Footer