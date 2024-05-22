import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import './Cards.css';
import axios from 'axios';
import Loading from '../loading/Loading';





function Cards() {
  const [gamesData, setGamesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllGames() {
      try {

        const url = `${process.env.REACT_APP_SERVER_URL}/getAllGames`;

        const response = await axios.get(url);
        setGamesData(response.data);
        localStorage.setItem('allGamesFromDB', JSON.stringify(response.data));
      
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }

    getAllGames();
  }, []); // Empty dependency array to run effect only once

  return (
    <>
      <p className='cardSectiontext' >Let's play!</p>
      <div className="cards-list">
        {isLoading ?
          <Loading/> :
          gamesData.map(item => <Card key={item.id} item={item} />)
        }
      </div>
    </>
  );
}

export default Cards;
