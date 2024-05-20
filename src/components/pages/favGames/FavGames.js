import React from 'react'
import FavCard from './../../mainComponent/favCard/FavCard';
import './FavGames.css';
const gamesData = require( '../../../data/games.json');
//Fetch fav games fom DB 


function FavGames() {
  return (
    
      <>
       <div className='cardsContainer'>
      {
        gamesData.map((item)=>{
          return <FavCard item={item}/>
        })
      }</div>
      </>
    
  )
}

export default FavGames
