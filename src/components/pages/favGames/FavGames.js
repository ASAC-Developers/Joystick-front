import React, { useEffect, useState } from 'react'
import FavCard from './../../mainComponent/favCard/FavCard';
import './FavGames.css';




function FavGames() {

  const [favoriteGames, setFavoriteGames] = useState(JSON.parse(localStorage.getItem('fav')) || []);
  

  function onReload(){
    
    setFavoriteGames(JSON.parse(localStorage.getItem('fav')) || []);

  }


  return (
    
      <>
       <div className='cardsContainer'>
      
      {favoriteGames.length == 0 ? <h1>The favorite list is empty, try adding some... 🕹</h1> : 
       favoriteGames.map((item)=>{
          return <FavCard key={item.id} item={item} onReload={onReload}/>
        })}
      </div>
      </>
    
  );
}

export default FavGames
