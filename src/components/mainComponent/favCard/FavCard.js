import React from 'react';
import { Link } from 'react-router-dom';
import './FavCard.css';




function FavCard(props) {

  
  let favoriteGames = JSON.parse(localStorage.getItem('fav')) || [];

  function removeFromFav(id){

    
    let newFav = favoriteGames.filter((g) => g.id != id );
    
    localStorage.setItem('fav', JSON.stringify(newFav));

    props.onReload();


  }


  return (
    // <div className='cardsContainer'>
    
   <div class="game-card">
   <div class="game-content">
     <img class="game-banner" src={props.item.image} alt="Game Banner"/>
     <h1>{props.item.title}</h1>
   </div>
   <div class="button-container">
     <button class="game-btn outline" onClick={()=>removeFromFav(props.item.id)}>REMOVE</button>
     <Link to={`/singlegame/${props.item.id}`}>
     <button class="game-btn fill">PLAY NOW</button>
     </Link>
   </div>

 {/* </div> */}
 
 
 
 
 
     </div>
  )
}

export default FavCard
