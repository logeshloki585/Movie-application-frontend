import React, { Component, useEffect, useState } from "react";
import Slider from 'react-slick'
import './carousel.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios';
import { END_POINT } from "../../Assests/Container";

const SimpleSlider = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchVerticalBanners = async () => {
            try {
                const specificEndpoint = '/movie/getverticalbanner';
                const fullUrl = `${END_POINT}${specificEndpoint}`;
                const response = await axios.get(fullUrl);
                setMovies(response.data.movies);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchVerticalBanners();
    }, []);

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
      <div className="md:px-7">

        <Slider {...settings}>
        {movies.map((movie, index) => (
            <div className="h-[240px]  md:h-[360px]  ">
            <img className="h-full w-full px-4 md:px-24" src={movie.verticalBanner} alt={`Slide ${index + 1}`} />
            </div>
        ))}

          
        </Slider>
      </div>
    );
  };
  
  export default SimpleSlider;