import React from 'react';
import SimpleSlider from '../Components/Carousel/Carousel';
import AllMovies from '../Components/AllMovies/AllMovies';

function Hero() {
  return (
    <div className='pb-12'>
        <div className='mt-6'>
            <SimpleSlider/>
        </div>
        <div className='mt-8'>
            <AllMovies/>
        </div>
    </div>
  )
}

export default Hero