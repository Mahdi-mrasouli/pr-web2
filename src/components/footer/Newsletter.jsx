import React from 'react'

import {Subheading} from '../../components';
import './newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
        <Subheading title= 'Newsletter'/>
        <h1 className='headtext__cormorant'>Subscribe To Our Newlatter</h1>
        <h4 className='p__cormorant'>And never miss latest update</h4>
        <div className="app__newsletter-input">
          <input type="text" placeholder='Enter Email Address'/>
          <input type="button" value='Subscribe'/>
        </div>
        
    </div>
  </div>
)

export default Newsletter