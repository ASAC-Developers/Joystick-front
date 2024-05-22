import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleGame.css';
import { HiHeart } from "react-icons/hi";

function SingleGame() {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const allGames = JSON.parse(localStorage.getItem('allGamesFromDB'));
  const game = allGames.find(ga => ga.id == id);

  useEffect(() => {
    const favoriteGames = JSON.parse(localStorage.getItem('fav')) || [];
    const alreadyInFav = favoriteGames.some((game) => game.id == id);
    setIsFavorite(alreadyInFav);
  }, [id]);

  function changeFavorite() {
    const favoriteGames = JSON.parse(localStorage.getItem('fav')) || [];
    let newFav;

    if (isFavorite) {
      newFav = favoriteGames.filter((g) => g.id != id);
    } else {
      newFav = [...favoriteGames, game];
    }

    localStorage.setItem('fav', JSON.stringify(newFav));
    setIsFavorite(!isFavorite);
  }

  return (
    <>
      <div className='favbtncontainer'>
        <input 
          id="toggle-heart" 
          type="checkbox" 
          checked={isFavorite} 
          onChange={changeFavorite} 
        />
        <label htmlFor="toggle-heart" aria-label="like">❤</label>
      </div>

      <div className='gameDiv'>
        <iframe 
          width="80%" 
          height="100%"
          src={game.url}
          frameBorder="0" 
          allowFullScreen="" 
        />
      </div>
    </>
  );
}

export default SingleGame;
