import React from 'react';
import { Link } from 'react-router-dom';
import './FavCard.css';
//Handle remove btn to remove game from fav list 

function FavCard(props) {
  return (
    // <div className='cardsContainer'>
    <div class="game-card">
  <div class="game-content">
    <img class="game-banner" src={props.item.image} alt="Game Banner"/>
    <h1>{props.item.title}</h1>
  </div>
  <div class="button-container">
    <button class="game-btn outline">REMOVE</button>
    <Link to={`/singlegame/${props.item.id}`}>
    <button class="game-btn fill">PLAY NOW</button>
    </Link>
  </div>
{/* </div> */}





    </div>
  )
}

export default FavCard
