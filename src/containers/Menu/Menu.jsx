import React from 'react'
import {images, data} from '../../constants';
import { Subheading, Menuitem } from '../../components';
import './menu.css'

const Menu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className="app__specialMenu-title">
        <Subheading title={'Menu That Fits You Palatte'}/>
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div> 
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <Menuitem key={wine.title + index} title={wine.title} tags={wine.tags} price={wine.price}/>
            ))}
          </div>
        </div>
        <div className='app__specialMenu-menu_img'>
          <img src={images.wine} alt="wine image" />
        </div>

        <div className="app__specialMenu-menu_coffee flex__center">
          <p className='app__specialMenu-menu_heading'>Coffee & Tea</p>
          <div className="app__specialMenu_menu_items">
            {data.coffee.map((coffee, index) => (
              <Menuitem key={coffee.title + index} title={coffee.title} tags={coffee.tags} price={coffee.price}/>
            ))}
          </div>
        </div>

        <div style={{marginTop: '15px'}}></div>
      </div>
    </div>
  )
}

export default Menu