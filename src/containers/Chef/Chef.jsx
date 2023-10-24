import React from 'react'
import {images} from '../../constants';
import { Subheading } from '../../components';
import './chef.css'

const Chef = () => (
    <div className="app__bg app__wrapper section__padding">
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} />
      </div>
      <div className="app__wrapper_info">
        <Subheading title={"Chef's Word"}/>
        <h1 className='headtext__cormorant'>What we Believe In</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <p className='p__opensans'><span className='quote'>،،</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt architecto doloremque illum nam modi commodi, aliquid quaerat porro repellat. Ratione praesentium esse laborum nobis non ab velit consequuntur labore!</p>
          </div>
          
        </div>
        <div className="app__chef-sign">
            <p>Kevin Lou</p>
            <p className='p__opensans'>Chef & Founder</p>
            <img src={images.sign}/>
        </div>
      </div>
    </div>
)

export default Chef