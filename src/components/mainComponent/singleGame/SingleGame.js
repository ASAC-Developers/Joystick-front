import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleGame.css';
import { HiHeart } from "react-icons/hi";


function SingleGame() {

    
    const { id } = useParams();


  let allGames = JSON.parse(localStorage.getItem('allGamesFromDB'));
  
 

  let game = allGames.find(ga => ga.id == id);


  function changeFavorite(){
    const favoriteGames = JSON.parse(localStorage.getItem('fav')) || [];

    if (favoriteGames) {
      
      const alreadyInFav = favoriteGames.some((game)=> game.id == id);
      
      
      if (alreadyInFav) {
        //remove it from favorite list

        let newFav = favoriteGames.filter((g) => g.id != id );
        localStorage.setItem('fav', JSON.stringify(newFav));

      }else{
        favoriteGames.push(game);
        localStorage.setItem('fav', JSON.stringify(favoriteGames));
      }
     

    }else{

      let newFav = []
      localStorage.setItem('fav', JSON.stringify(newFav))
    }
  }
  return (
    <>

<div className="fixed right-6 bottom-6">
  {/*  fav btn */}
      <button
        type="button"
        className="my-button"
        onClick={changeFavorite}
      >
        <HiHeart size={30} 
        // color={isFav ? "#D72323" : ""}
        />
        <span className="sr-only">Share</span>
      </button>
    </div>
    
    <div className='gameDiv'>
      <iframe width="80%" height="80%"
          src={game.url}
          frameborder="0" allowfullscreen="" >
        </iframe>
    </div>
    </>
  )
}

export default SingleGame
