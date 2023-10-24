import React from 'react'
import {images} from '../../constants'
import { Subheading } from '../../components';
import {BsInstagram, BsTelegram, BsYoutube, BsTwitter} from 'react-icons/bs'
import './findus.css'

const FindUs = () => {
  return (
    <div className='app__wrapper section__padding app__bg2' id='contact'>
      <div className="app__wrapper-info">
        <Subheading title='Contact'/>
        <h1 className='headtext__cormorant'>Find Us</h1>
        <div className="app__findus-information">
          <p>Phone: 111-222-333</p>
          <p>Fax : 444-555</p>
          <p>Address: Iran-Tabriz-Roshdie-Boostan street - P03</p>
        </div>
        

        <button className='custom__button btn-findus'>Google Map</button>

        <ul className='app__findus-media'>
          <li className='app__findus-media_icons'><BsInstagram/></li>
          <li className='app__findus-media_icons'><BsTelegram/></li>
          <li className='app__findus-media_icons'><BsYoutube/></li>
          <li className='app__findus-media_icons'><BsTwitter/></li>
        </ul>
      </div>

      <div className=" app__findus_img">
        <img src={images.media} style={{borderRadius: 30}}/>
      </div>
    </div>
  )
}

export default FindUs