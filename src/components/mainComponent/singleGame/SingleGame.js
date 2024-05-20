import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleGame.css';
import { HiHeart } from "react-icons/hi";
const gamesData = require( '../../../data/games.json');



function SingleGame() {

    // const { id } = useParams();
    // console.log(id);
    // const result = gamesData.find(item =>item.id === id);
    // console.log(result);
    const { id } = useParams();
  const numericId = Number(id); // Convert the string id to a number
  console.log(numericId);
  
  const result = gamesData.find(item => item.id === numericId);
  console.log(result);

  return (
    <>

<div className="fixed right-6 bottom-6">
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
