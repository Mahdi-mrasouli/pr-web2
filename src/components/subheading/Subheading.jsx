import React from 'react';
import './subheading.css';

import images from '../../constants/images';

const Subheading = ({title}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <p className='p__cormorant'>{title}</p>
      <img src={images.fork} alt="fork" className='fork__img' />
    </div> 
  )
}

export default Subheading