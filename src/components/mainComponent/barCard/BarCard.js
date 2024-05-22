import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './BarCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

//Fetch the data from api => Add(Image, Title, Description, Release Date, GameURL=>WebSite ) 
const BarCardSlider = () => {
  const settings = {
    dots: false,
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

  //fetching data from the server
  const [gamesData, setGamesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllOnlineGames() {
      try {
        const url = `https://joystick-server.onrender.com/getGamesFromFreeToGameAPI`;
        const response = await axios.get(url);
        setGamesData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }

    getAllOnlineGames();
  }, []); 


  return (
    <div className="containerCards">
      <h1 className="sliderTitle">Online Games</h1>

    

      {isLoading? <h1>Loading ...</h1> : 
        <Slider {...settings}>
          
      {gamesData.map((game) =>

        <div key={game.id} className="barCard">

        <img src={game.thumbnail} alt="BarImage" />
          <div>
          <h2>{game.title}</h2>
          <h3>Release Date: {game.release_date}</h3>
          
          <p>Description: Soon you can invest in Sid Harman's new attractive property, set in the heart of Athens.</p>
           
          <button className='barBtn' onClick={()=>openGame(game.game_url)}><span>Play Now</span></button>
          </div>
 
        </div>

      )
    }
        </Slider>
      }
      

    
    </div>
  );
};

function openGame(url){

  window.open(url);

}

export default BarCardSlider;


