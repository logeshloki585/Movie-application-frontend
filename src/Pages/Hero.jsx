import React from 'react';
import SimpleSlider from '../Components/Carousel/Carousel';
import AllProducts from '../Components/AllProducts/AllProducts';

function Hero() {
  return (
    <div className='pb-12'>
        <div className=''>
            <SimpleSlider/>
        </div>
        <div className='mt-8'>
            <AllProducts/>
        </div>
    </div>
  )
}

export default Hero