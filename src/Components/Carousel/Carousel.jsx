import React, { Component, useEffect, useState } from "react";
import Slider from 'react-slick'
import './carousel.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios';
import { END_POINT } from "../../Assests/Container";

const SimpleSlider = () => {
    const [products, setProducts] = useState(['https://www.shutterstock.com/image-vector/winter-sale-horizontal-advertising-banner-260nw-536057692.jpg',
    'https://www.shutterstock.com/image-vector/winter-sale-horizontal-advertising-banner-260nw-536057692.jpg',
    ]);

    const settings = {
      dots: true,
      infinite: true,
      speed: 1400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };
    return (
      <div className= " md:px-7 ">

        <Slider {...settings}>
        {products.map((product, index) => (
            <div className="h-[240px]  md:h-[270px] mt-6 ">
            <img className="h-full w-full px-4 md:px-24" src={product} alt={`Slide ${index + 1}`} />
            </div>
        ))}

          
        </Slider>
      </div>
    );
  };
  
  export default SimpleSlider;