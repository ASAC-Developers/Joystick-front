import React from 'react';
import Slider from 'react-slick';
import './BarCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Fetch the data from api => Add(Image, Title, Description, Release Date, GameURL=>WebSite ) 
const BarCardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
      {
        breakpoint: 932,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1285.60,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
     
    ],
  };

  return (
    <div className="containerCards">
      <h1 className="sliderTitle">Our Featured Cards</h1>
      <Slider {...settings}>

        <div className="barCard">
          <img src="image.jpeg" alt="BarImage" />
          <div>
          <h2>Title of the game</h2>
          <h3>Release Date:</h3>
          <p>Description: Soon you can invest in Sid Harman's new attractive property, set in the heart of Athens.</p>
           
            {/* Handle the btn go to game website */}

            <button className='barBtn'><span>Play Now</span></button>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default BarCardSlider;
