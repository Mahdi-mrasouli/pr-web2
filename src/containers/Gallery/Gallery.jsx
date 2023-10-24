import React from 'react'
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/sea-green';
import {slide} from './slide'
import './gallery.css'

import { Subheading } from '../../components'
import { images } from '../../constants'

// const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06]

const Gallery = () => {

  // const scrollRef = React.useRef(null);

  // const scroll = (direction) => {
  //   const {current} = scrollRef;

  //   if(direction === 'left') {
  //     current.scrollLeft -= 300;
  //   }
  //   else {
  //     current.scrollLeft += 300;
  //   }
  // }
  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <Subheading title='Instagram'/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#AAA', marginBottom: '2rem'}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, ab!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, ab!
        </p>
        <button className='custom__button' type='button'>View more</button>
      </div>
      <div className="app__gallery-images">
      <Splide aria-label="My Favorite Images" options={ {
        perPage: 3,
        type : 'loop',
        gap: '3rem',
        width : '70rem',
        height: '22rem',
        autoplay: 'true',
        focus: 'center',
        cover: 'true',
        label: 'gallery images',
        rewind: false,
  } }>
        
        <SplideSlide className='app__gallery-images_items'>
          <img src={images.gallery01} alt="Image 1"/>
          <BsInstagram className='gallery__image-icon'/>
        </SplideSlide>
        <SplideSlide className='app__gallery-images_items'>
          <img src={images.gallery04} alt="Image 2"/>
          <BsInstagram className='gallery__image-icon'/>
        </SplideSlide>
        <SplideSlide className='app__gallery-images_items'>
          <img src={images.gallery03} alt="Image 3"/>
          <BsInstagram className='gallery__image-icon'/>
        </SplideSlide>
        <SplideSlide className='app__gallery-images_items'>
          <img src={images.gallery05} alt="Image 3"/>
          <BsInstagram className='gallery__image-icon'/>
        </SplideSlide>
        <SplideSlide className='app__gallery-images_items'>
          <img src={images.gallery06} alt="Image 3"/>
          <BsInstagram className='gallery__image-icon'/>
        </SplideSlide>
      </Splide>

        {/* <div className="app__gallery-images_container" ref={scrollRef}> */}
          {/* {galleryImages.map((images, index) => (
            <div className='app__gallery-images_card flex__center' key={'gallery_images'}></div>
          ))} */}
        {/* </div> */}
        {/* <div className="app__gallery-images_arrow">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() =>  scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() =>  scroll('right')}/>
        </div> */}
      </div>
    </div>
  )
}



export default Gallery