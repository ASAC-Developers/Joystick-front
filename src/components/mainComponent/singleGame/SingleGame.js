import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleGame.css';
import { HiHeart } from "react-icons/hi";
const gamesData = require( '../../../data/games.json');

//Handle favoraite button => add fav game to DB

function SingleGame() {

    
    const { id } = useParams();
  const numericId = Number(id); 
  
  const result = gamesData.find(item => item.id === numericId);

  return (
    <>

<div className="fixed right-6 bottom-6">
  {/*  fav btn */}
      <button
        type="button"
        className="my-button"
        // onClick={addToFav}
      >
        <HiHeart size={30} 
        // color={isFav ? "#D72323" : ""}
        />
        <span className="sr-only">Share</span>
      </button>
    </div>
    
    <div className='gameDiv'>
      <iframe width="80%" height="80%"
          src={result.gameSrc}
          frameborder="0" allowfullscreen="" >
        </iframe>
    </div>
    </>
  )
}

export default SingleGame
