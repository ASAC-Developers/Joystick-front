import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './BarCard.css';
import axios from 'axios';
import Loading from '../loading/Loading';
 
const BarCardSlider = () => {
  // Fetching data from the server
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
      {isLoading ? (
        <Loading/>
      ) : (
        <Carousel
          showArrows={true}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          centerMode={true}
          centerSlidePercentage={50}
          swipeable={true}
          emulateTouch={true}
        >
 
          {gamesData.map((game) => (
            <div className='singleCard'>
            <div key={game.id} className="barCard">
              <img src={game.thumbnail} alt="BarImage" />
              <div>
                <h2>{game.title}</h2>
                <h3>Release Date: {game.release_date}</h3>
                {/* <p>Description: Soon you can invest in Sid Harman's new attractive property, set in the heart of Athens.</p> */}
                <button className='barBtn' onClick={() => openGame(game.game_url)}>
                  <span className='playNowBar'>Play Now</span>
                </button>
              </div>
            </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};
 
function openGame(url) {
  window.open(url);
}
 
export default BarCardSlider;